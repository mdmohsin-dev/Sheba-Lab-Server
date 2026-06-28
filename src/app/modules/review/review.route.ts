import express, { Router } from 'express'
import { ReviewController } from './review.controller.ts';
import { UserRole } from '../../../generated/prisma/enums.ts';
import auth from '../../middlewares/auth.ts';

const router:Router = express.Router();

router.get('/', ReviewController.getAllFromDB);

router.post(
    '/',
    auth(UserRole.PATIENT),
    ReviewController.insertIntoDB
);


export const ReviewRoutes = router;