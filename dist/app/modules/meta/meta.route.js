import express, { Router } from 'express';
import { MetaController } from './meta.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma/enums';
const router = express.Router();
router.get('/', auth(UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT), MetaController.fetchDashboardMetaData);
export const MetaRoutes = router;
//# sourceMappingURL=meta.route.js.map