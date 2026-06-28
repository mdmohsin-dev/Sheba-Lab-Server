import type { IJWTPayload } from "../../types/common";
import type { IAuthUser } from "../../interfaces/common";
import type { IPaginationOptions } from "../../interfaces/pagination";
import { AppointmentStatus } from "../../../../generated/prisma/enums";
export declare const AppointmentService: {
    createAppointment: (user: IJWTPayload, payload: {
        doctorId: string;
        scheduleId: string;
    }) => Promise<any>;
    getMyAppointment: (user: IAuthUser, filters: any, options: IPaginationOptions) => Promise<{
        meta: {
            total: any;
            limit: any;
            page: any;
        };
        data: any;
    }>;
    updateAppointmentStatus: (appointmentId: string, status: AppointmentStatus, user: IJWTPayload) => Promise<any>;
    cancelUnpaidAppointments: () => Promise<void>;
    getAllFromDB: (filters: any, options: IPaginationOptions) => Promise<{
        meta: {
            total: any;
            page: any;
            limit: any;
        };
        data: any;
    }>;
    createAppointmentWithPayLater: (user: IAuthUser, payload: any) => Promise<any>;
    initiatePaymentForAppointment: (appointmentId: string, user: IAuthUser) => Promise<{
        paymentUrl: any;
    }>;
};
//# sourceMappingURL=appointment.service.d.ts.map