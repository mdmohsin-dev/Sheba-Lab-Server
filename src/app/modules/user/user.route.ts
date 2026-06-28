import express, { Router, type NextFunction, type Request, type Response } from 'express';
import { UserController } from './user.controller.ts';
import { UserRole } from '../../../generated/prisma/enums.ts';
import { FileUploader } from '../../helper/FileUploader.ts';
import { userValidation } from './user.validation.ts';
import auth from '../../middlewares/auth.ts';

const router: Router = express.Router()


router.get('/',
    // auth(UserRole.ADMIN),
    UserController.getAllFromDB)


router.get(
    '/me',
    auth(UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
    UserController.getMyProfile
)


router.post('/create-patient',
    FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = userValidation.createPatientValidationSchema.parse(JSON.parse(req.body.data))
        return UserController.createPatient(req, res, next)
    }
)


router.post('/create-doctor',
    auth(UserRole.ADMIN),
    FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        console.log(JSON.parse(req.body.data))
        req.body = userValidation.createDoctorValidationSchema.parse(JSON.parse(req.body.data))
        return UserController.createDoctor(req, res, next)
    })



router.post('/create-admin',
    // auth(UserRole.ADMIN), 
    FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = userValidation.createAdminValidationSchema.parse(JSON.parse(req.body.data))
        return UserController.createAdmin(req, res, next)
    })


router.patch(
    '/:id/status',
    auth(UserRole.ADMIN),
    UserController.changeProfileStatus
);


export const UserRoutes = router