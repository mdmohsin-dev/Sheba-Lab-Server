import express from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import config from './config';
import router from './app/routes';
import cookieParser from 'cookie-parser';
import { PaymentController } from './app/modules/payment/payment.controller';
import cron from 'node-cron';
import { AppointmentService } from './app/modules/appointment/appointment.service';
const app = express();
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
cron.schedule('* * * * * ', () => {
    try {
        AppointmentService.cancelUnpaidAppointments();
    }
    catch (error) {
        console.log(error);
    }
});
app.post("/webhook", express.raw({ type: "application/json" }), PaymentController.handleStripeWebhookEvent);
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router);
app.get('/', (req, res) => {
    res.send({
        Message: "Sheba Lab care server..",
        environment: config.node_env,
        uptime: process.uptime().toFixed(2) + ' seconds',
        timestamp: new Date().toISOString()
    });
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
//# sourceMappingURL=app.js.map