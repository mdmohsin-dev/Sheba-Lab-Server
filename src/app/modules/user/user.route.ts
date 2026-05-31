import express, { Router, type NextFunction, type Request, type Response } from 'express';
import { UserController } from './user.controller';
import { FileUploader } from '../../helper/FileUploader';
import { userValidation } from './user.validation';

const router: Router = express.Router()

router.post('/create-patient',
    FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = userValidation.createPatientValidationSchema.parse(JSON.parse(req.body.data))
        return UserController.createPatient(req, res, next)
    }
)

export const UserRoutes = router