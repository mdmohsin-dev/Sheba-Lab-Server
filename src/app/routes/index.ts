import express from 'express';
import type { Router } from "express";
import { UserRoutes } from "../modules/user/user.route.ts";
import { AuthRoutes } from "../modules/auth/auth.route.ts";
import { ScheduleRoutes } from "../modules/schedule/schedule.routes.ts";
import { DoctorScheduleRoutes } from "../modules/doctorSchedule/doctorSchedule.route.ts";
import { SpecialtiesRoutes } from "../modules/specialties/specialties.route.ts";
import { DoctorRoutes } from "../modules/doctor/doctor.route.ts";
import { MetaRoutes } from "../modules/meta/meta.route.ts";
import { AppointmentRouter } from "../modules/appointment/appointment.route.ts";

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
        path: '/appointment',
        route: AppointmentRouter
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;