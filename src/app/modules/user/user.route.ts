import express, { Router, type NextFunction, type Request, type Response } from 'express';
import { UserController } from './user.controller';
import { FileUploader } from '../../helper/FileUploader';
import { userValidation } from './user.validation';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma/enums';

const router: Router = express.Router()


router.get('/',
    // auth(UserRole.ADMIN),
     UserController.getAllFromDB)


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
    auth(UserRole.ADMIN), FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = userValidation.createAdminValidationSchema.parse(JSON.parse(req.body.data))
        return UserController.createAdmin(req, res, next)
    })


export const UserRoutes = router