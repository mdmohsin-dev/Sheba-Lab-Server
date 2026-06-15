import express, { type Router } from "express";
import { DoctorScheduleController } from "./doctorSchedule.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";
import { DoctorScheduleValidation } from "./doctorSchedule.validation";
import validateRequest from "../../middlewares/validateRequest";

const router: Router = express.Router();



router.post(
    "/",
    auth(UserRole.DOCTOR),
    validateRequest(DoctorScheduleValidation.createDoctorScheduleValidationSchema),
    DoctorScheduleController.insertIntoDB
)

export const DoctorScheduleRoutes = router;