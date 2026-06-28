import type { Router } from "express";
import express from "express"
import auth from "../../middlewares/auth.ts";
import { UserController } from "../user/user.controller.ts";
import { AppointmentController } from "./appointment.controller.ts";
import { AppointmentValidation } from "./appointment.validation.ts";
import validateRequest from "../../middlewares/validateRequest.ts";
import { paymentLimiter } from "../../middlewares/rateLimiter.ts";
import { UserRole } from "../../../generated/prisma/enums.ts";

const router: Router = express.Router()


router.get(
    '/',
    auth(
        // UserRole.SUPER_ADMIN, 
        UserRole.ADMIN),
    AppointmentController.getAllFromDB
);


router.get(
    "/my-appointments",
    auth(UserRole.PATIENT, UserRole.DOCTOR),
    AppointmentController.getMyAppointment
)

router.post("/",
    auth(UserRole.PATIENT),
    AppointmentController.createAppointment
)


router.post(
    '/pay-later',
    auth(UserRole.PATIENT),
    validateRequest(AppointmentValidation.createAppointment),
    AppointmentController.createAppointmentWithPayLater
);

router.post(
    '/:id/initiate-payment',
    auth(UserRole.PATIENT),
    paymentLimiter,
    AppointmentController.initiatePayment
);


router.patch(
    "/status/:id",
    auth(UserRole.ADMIN, UserRole.DOCTOR),
    AppointmentController.updateAppointmentStatus
)


export const AppointmentRouter = router