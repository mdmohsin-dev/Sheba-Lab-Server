import Stripe from "stripe";
import { prisma } from "../../../../lib/prisma";
import { PaymentStatus } from "../../../../generated/prisma/enums";
const handleStripeWebhookEvent = async (event) => {
    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object;
            const appointmentId = session.metadata?.appointmentId;
            const paymentId = session.metadata?.paymentId;
            await prisma.appointment.update({
                where: {
                    id: appointmentId
                },
                data: {
                    paymentStatus: session.payment_status === "paid" ? PaymentStatus.PAID : PaymentStatus.UNPAID
                }
            });
            await prisma.payment.update({
                where: {
                    id: paymentId
                },
                data: {
                    status: session.payment_status === "paid" ? PaymentStatus.PAID : PaymentStatus.UNPAID,
                    paymentGatewayData: session
                }
            });
            break;
        }
        default:
            console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }
};
export const PaymentService = {
    handleStripeWebhookEvent
};
//# sourceMappingURL=payment.service.js.map