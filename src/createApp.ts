import express from 'express';
import type { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler.ts';
import notFound from './app/middlewares/notFound.ts';
import cookieParser from 'cookie-parser';
import { PaymentController } from './app/modules/payment/payment.controller.ts';
import cron from 'node-cron';
import config from './config/index.ts';
import router from './app/routes/index.ts';
import { AppointmentService } from './app/modules/appointment/appointment.service.ts';

const app: Application = express();
app.use(cookieParser());
app.use(cors({
    origin: 'https://sheba-lab-client.vercel.app',
    credentials: true
}));


cron.schedule('* * * * * ', () => {
    try {
        AppointmentService.cancelUnpaidAppointments()
    } catch (error) {
        console.log(error)
    }
});

app.post(
    "/webhook",
    express.raw({ type: "application/json" }),
    PaymentController.handleStripeWebhookEvent
);

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
    res.send({
        Message: "Sheba Lab care server..",
        environment: config.node_env,
        uptime: process.uptime().toFixed(2) + ' seconds',
        timestamp: new Date().toISOString()
    })
});


app.use(globalErrorHandler);

app.use(notFound);

export default app;