
import express, { type Router } from "express";
import { DoctorScheduleController } from "./doctorSchedule.controller.ts";
import auth from "../../middlewares/auth.ts";
import { DoctorScheduleValidation } from "./doctorSchedule.validation.ts";
import validateRequest from "../../middlewares/validateRequest.ts";
import { UserRole } from "../../../generated/prisma/enums.ts";

const router: Router = express.Router();

// example.com/api/v2/schedule

router.get(
    '/',
    // auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
    DoctorScheduleController.getAllFromDB
);

router.get(
    '/my-schedule',
    auth(UserRole.DOCTOR),
    DoctorScheduleController.getMySchedule
)

router.post(
    "/",
    auth(UserRole.DOCTOR),
    validateRequest(DoctorScheduleValidation.createDoctorScheduleValidationSchema),
    DoctorScheduleController.insertIntoDB
)
router.delete(
    '/:id',
    auth(UserRole.DOCTOR),
    DoctorScheduleController.deleteFromDB
);


export const DoctorScheduleRoutes = router;