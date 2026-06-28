import express, { Router } from 'express';
import { PatientController } from './patient.controller.ts';
import auth from '../../middlewares/auth.ts';
import { UserRole } from '../../../generated/prisma/enums.ts';

const router:Router = express.Router();

router.get(
    '/',
    PatientController.getAllFromDB
);

router.get(
    '/:id',
    PatientController.getByIdFromDB
);

router.patch(
    '/',
    auth(UserRole.PATIENT),
    PatientController.updateIntoDB
);

router.delete(
    '/soft/:id',
    PatientController.softDelete
);

export const PatientRoutes = router;