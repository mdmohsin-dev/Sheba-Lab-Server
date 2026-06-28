import express, { type NextFunction, type Request, type Response, Router } from 'express';
import { SpecialtiesController } from './specialties.controller.ts';
import { FileUploader } from '../../helper/FileUploader.ts';
import { SpecialtiesValidtaion } from './specialties.validation.ts';
import { UserRole } from '../../../generated/prisma/enums.ts';
import auth from '../../middlewares/auth.ts';


const router:Router = express.Router();

router.get(
    '/',
    SpecialtiesController.getAllFromDB
);

router.post(
    '/',
    FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = SpecialtiesValidtaion.create.parse(JSON.parse(req.body.data))
        return SpecialtiesController.inserIntoDB(req, res, next)
    }
);


router.delete(
    '/:id',
    auth(UserRole.ADMIN, UserRole.ADMIN),
    SpecialtiesController.deleteFromDB
);

export const SpecialtiesRoutes = router;