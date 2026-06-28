import express, { Router } from 'express';
import auth from '../../middlewares/auth.ts';
import { UserRole } from '../../../generated/prisma/enums.ts';
import { MetaController } from './meta.controller.ts';

const router:Router = express.Router();

router.get(
    '/',
    auth(UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
    MetaController.fetchDashboardMetaData
)


export const MetaRoutes = router;