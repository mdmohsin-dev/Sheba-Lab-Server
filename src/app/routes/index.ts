import express, { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ScheduleRoutes } from '../modules/schedule/schedule.routes';
import { DoctorScheduleRoutes } from '../modules/doctorSchedule/doctorSchedule.route';
import { SpecialtiesRoutes } from '../modules/specialties/specialties.route';
import { DoctorRoutes } from '../modules/doctor/doctor.route';
import { MetaRoutes } from '../modules/meta/meta.route';
import { AppointmentRouter } from '../modules/appointment/appointment.route';

const router: Router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: UserRoutes
    },
    {
        path: '/auth',
        route: AuthRoutes
    },
    {
        path: '/schedule',
        route: ScheduleRoutes
    },
    {
        path: '/doctor-schedule',
        route: DoctorScheduleRoutes
    },
    {
        path: '/specialties',
        route: SpecialtiesRoutes
    },
    {
        path: '/doctor',
        route: DoctorRoutes
    },
    {
        path: '/metadata',
        route: MetaRoutes
    },
    {
        path:'/appointment',
        route:AppointmentRouter
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;