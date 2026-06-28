import express, { type Router } from "express";
import { UserRole } from "../../../generated/prisma/enums.ts";
import { ScheduleController } from "./schedule.controller.ts";
import auth from "../../middlewares/auth.ts";

const router: Router = express.Router();

router.get(
    "/",
    auth(UserRole.DOCTOR, UserRole.ADMIN),
    ScheduleController.schedulesForDoctor
)

router.post(
    "/",
    auth(UserRole.ADMIN),
    ScheduleController.insertIntoDB
)


router.delete(
    "/:id",
    auth(UserRole.ADMIN),
    ScheduleController.deleteSchedle
)
export const ScheduleRoutes = router;