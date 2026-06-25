import { AppointmentStatus, PaymentStatus, type Prescription } from "../../../../generated/prisma/client";
import type { IJWTPayload } from '../../types/common';
import { type IOptions } from '../../helper/paginationHelper';
import type { IPaginationOptions } from '../../interfaces/pagination';
export declare const PrescriptionService: {
    createPrescription: (user: IJWTPayload, payload: Partial<Prescription>) => Promise<{
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
        doctorId: string;
        patientId: string;
        appointmentId: string;
        updateAt: Date;
        instructions: string;
        followUpDate: Date | null;
    }>;
    patientPrescription: (user: IJWTPayload, options: IOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: ({
            appointment: {
                createdAt: Date;
                status: AppointmentStatus;
                id: string;
                doctorId: string;
                scheduleId: string;
                patientId: string;
                videoCallingId: string;
                paymentStatus: PaymentStatus;
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
            doctorId: string;
            patientId: string;
            appointmentId: string;
            updateAt: Date;
            instructions: string;
            followUpDate: Date | null;
        })[];
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
                status: AppointmentStatus;
                id: string;
                doctorId: string;
                scheduleId: string;
                patientId: string;
                videoCallingId: string;
                paymentStatus: PaymentStatus;
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
            doctorId: string;
            patientId: string;
            appointmentId: string;
            updateAt: Date;
            instructions: string;
            followUpDate: Date | null;
        })[];
    }>;
};
//# sourceMappingURL=prescription.service.d.ts.map