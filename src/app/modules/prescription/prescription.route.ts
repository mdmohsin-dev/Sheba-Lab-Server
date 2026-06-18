import express, { Router } from 'express';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma/enums';
import { PrescriptionController } from './prescription.controller';
const router:Router = express.Router();


router.get(
    '/my-prescription',
    auth(UserRole.PATIENT),
    PrescriptionController.patientPrescription
)

router.post(
    "/",
    auth(UserRole.DOCTOR),
    PrescriptionController.createPrescription
);

export const PrescriptionRoutes = router;