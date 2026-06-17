import type { Router } from "express";
import express from "express"
import { AppointmentController } from "./appointment.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";

const router:Router = express.Router()

router.post("/",
    auth(UserRole.PATIENT),
    AppointmentController.createAppointment)


export const AppointmentRouter = router