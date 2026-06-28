import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync.ts";
import { stripe } from "../../helper/stripe.ts";
import { PaymentService } from "./payment.service.ts";
import sendResponse from "../../shared/sendResponse.ts";

const handleStripeWebhookEvent = catchAsync(async (req: Request, res: Response) => {

    const sig = req.headers["stripe-signature"] as string;
    const webhookSecret = "whsec_d917344c324d7f4bfccdc3f5ecba21be588d672243aeec6ea7dd6daf8087b77c"

    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err: any) {
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
}