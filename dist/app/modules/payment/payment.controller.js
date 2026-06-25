import catchAsync from "../../shared/catchAsync";
import { PaymentService } from "./payment.service";
import sendResponse from "../../shared/sendResponse";
import { stripe } from "../../helper/stripe";
const handleStripeWebhookEvent = catchAsync(async (req, res) => {
    const sig = req.headers["stripe-signature"];
    const webhookSecret = "whsec_d917344c324d7f4bfccdc3f5ecba21be588d672243aeec6ea7dd6daf8087b77c";
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    }
    catch (err) {
        console.error("⚠️ Webhook signature verification failed:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    const result = await PaymentService.handleStripeWebhookEvent(event);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Webhook req send successfully',
        data: result,
    });
});
export const PaymentController = {
    handleStripeWebhookEvent
};
//# sourceMappingURL=payment.controller.js.map