import express, { Router } from "express";
import { DoctorController } from "./doctor.controller";
const router = express.Router();
router.get("/", DoctorController.getAllFromDB);
router.get('/:id', DoctorController.getByIdFromDB);
router.post("/suggestion", DoctorController.getAISuggestions);
router.patch("/:id", DoctorController.updateIntoDB);
export const DoctorRoutes = router;
//# sourceMappingURL=doctor.route.js.map