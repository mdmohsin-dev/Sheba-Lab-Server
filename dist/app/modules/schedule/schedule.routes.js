import express, {} from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";
import { ScheduleController } from "./schedule.controller";
const router = express.Router();
router.get("/", auth(UserRole.DOCTOR, UserRole.ADMIN), ScheduleController.schedulesForDoctor);
router.post("/", auth(UserRole.ADMIN), ScheduleController.insertIntoDB);
router.delete("/:id", auth(UserRole.ADMIN), ScheduleController.deleteSchedle);
export const ScheduleRoutes = router;
//# sourceMappingURL=schedule.routes.js.map