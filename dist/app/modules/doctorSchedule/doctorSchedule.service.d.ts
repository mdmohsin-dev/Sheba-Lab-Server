import type { Prisma } from "../../../../generated/prisma/client";
import type { IAuthUser } from "../../interfaces/common";
import type { IPaginationOptions } from "../../interfaces/pagination";
import type { IJWTPayload } from "../../types/common";
import type { IDoctorScheduleFilterRequest } from "./doctorSchedule.interface";
export declare const DoctorScheduleService: {
    insertIntoDB: (user: IJWTPayload, payload: {
        scheduleIds: string[];
    }) => Promise<Prisma.BatchPayload>;
    getMySchedule: (filters: any, options: IPaginationOptions, user: IAuthUser) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: {
            createdAt: Date;
            updatedAt: Date;
            doctorId: string;
            scheduleId: string;
            isBooked: boolean;
        }[];
    }>;
    deleteFromDB: (user: IAuthUser, scheduleId: string) => Promise<{
        createdAt: Date;
        updatedAt: Date;
        doctorId: string;
        scheduleId: string;
        isBooked: boolean;
    }>;
    getAllFromDB: (filters: IDoctorScheduleFilterRequest, options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: ({
            schedule: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                startDateTime: Date;
                endDateTime: Date;
            };
            doctor: {
                createdAt: Date;
                email: string;
                name: string;
                id: string;
                profilePhoto: string | null;
                contactNumber: string | null;
                address: string | null;
                isdeleted: boolean;
                updatedAt: Date;
                registrationNumber: string;
                experience: number;
                gender: import("../../../../generated/prisma/enums").Gender;
                appointmentFee: number;
                qualification: string;
                currentWorkingPlace: string;
                averageRating: number;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            doctorId: string;
            scheduleId: string;
            isBooked: boolean;
        })[];
    }>;
};
//# sourceMappingURL=doctorSchedule.service.d.ts.map