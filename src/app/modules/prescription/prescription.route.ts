import express, { Router } from 'express';
import auth from '../../middlewares/auth.ts';
import { UserRole } from '../../../generated/prisma/enums.ts';
import { PrescriptionController } from './prescription.controller.ts';
const router:Router = express.Router();


router.get(
    '/',
    auth(
        // UserRole.SUPER_ADMIN, 
        UserRole.ADMIN),
    PrescriptionController.getAllFromDB
);



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