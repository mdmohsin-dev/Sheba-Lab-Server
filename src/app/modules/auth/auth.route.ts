import express, { Router } from 'express';
import { AuthController } from './auth.controller.ts';
import auth from '../../middlewares/auth.ts';
import { UserRole } from '../../../generated/prisma/enums.ts';

const router: Router = express.Router()

router.get(
    "/me",
    AuthController.getMe
)

router.post('/login',AuthController.login)

router.post(
    '/refresh-token',
    AuthController.refreshToken
)

router.post(
    '/change-password',
    auth(
        UserRole.ADMIN,
        UserRole.DOCTOR,
        UserRole.PATIENT
    ),
    AuthController.changePassword
);

router.post(
    '/forgot-password',
    AuthController.forgotPassword
);

// router.post(
//     '/reset-password',
//     AuthController.resetPassword
// )

export const AuthRoutes = router