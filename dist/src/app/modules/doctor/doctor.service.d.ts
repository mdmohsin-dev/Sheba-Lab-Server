import { type IOptions } from "../../helper/paginationHelper";
import type { Doctor } from "../../../../generated/prisma/client";
import type { IDoctorUpdateInput } from "./doctor.interface";
export declare const DoctorService: {
    getAllFromDB: (filters: any, options: IOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: ({
            doctorSpecialties: ({
                specialities: {
                    title: string;
                };
            } & {
                doctorId: string;
                specialitiesId: string;
            })[];
            doctorSchedule: ({
                schedule: {
                    createdAt: Date;
                    id: string;
                    updatedAt: Date;
                    startDateTime: Date;
                    endDateTime: Date;
                };
            } & {
                createdAt: Date;
                updatedAt: Date;
                doctorId: string;
                scheduleId: string;
                isBooked: boolean;
            })[];
            reviews: {
                rating: number;
            }[];
        } & {
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
        })[];
    }>;
    updateIntoDB: (id: string, payload: Partial<IDoctorUpdateInput>) => Promise<{
        doctorSpecialties: ({
            specialities: {
                id: string;
                title: string;
                icon: string;
            };
        } & {
            doctorId: string;
            specialitiesId: string;
        })[];
    } & {
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
    }>;
    getAISuggestions: (payload: {
        symptoms: string;
    }) => Promise<any>;
    getByIdFromDB: (id: string) => Promise<Doctor | null>;
};
//# sourceMappingURL=doctor.service.d.ts.map