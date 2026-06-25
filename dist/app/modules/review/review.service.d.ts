import type { IPaginationOptions } from "../../interfaces/pagination";
import type { IJWTPayload } from "../../types/common";
export declare const ReviewService: {
    insertIntoDB: (user: IJWTPayload, payload: any) => Promise<{
        createdAt: Date;
        id: string;
        updatedAt: Date;
        doctorId: string;
        patientId: string;
        appointmentId: string;
        rating: number;
        comment: string | null;
    }>;
    getAllFromDB: (filters: any, options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: ({
            appointment: {
                createdAt: Date;
                status: import("../../../../generated/prisma/enums").AppointmentStatus;
                id: string;
                doctorId: string;
                scheduleId: string;
                patientId: string;
                videoCallingId: string;
                paymentStatus: import("../../../../generated/prisma/enums").PaymentStatus;
                updateAt: Date;
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
            patient: {
                createdAt: Date;
                email: string;
                name: string;
                id: string;
                profilePhoto: string | null;
                contactNumber: string | null;
                address: string | null;
                isdeleted: boolean;
                updatedAt: Date;
            };
        } & {
            createdAt: Date;
            id: string;
            updatedAt: Date;
            doctorId: string;
            patientId: string;
            appointmentId: string;
            rating: number;
            comment: string | null;
        })[];
    }>;
};
//# sourceMappingURL=review.service.d.ts.map