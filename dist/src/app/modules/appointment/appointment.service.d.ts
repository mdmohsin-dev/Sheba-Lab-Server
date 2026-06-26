import type { IJWTPayload } from "../../types/common";
import type { IAuthUser } from "../../interfaces/common";
import type { IPaginationOptions } from "../../interfaces/pagination";
import { AppointmentStatus, PaymentStatus } from "../../../../generated/prisma/enums";
export declare const AppointmentService: {
    createAppointment: (user: IJWTPayload, payload: {
        doctorId: string;
        scheduleId: string;
    }) => Promise<{
        paymentUrl: string | null;
    }>;
    getMyAppointment: (user: IAuthUser, filters: any, options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            limit: number;
            page: number;
        };
        data: ({
            payment: {
                createdAt: Date;
                status: PaymentStatus;
                id: string;
                appointmentId: string;
                amount: number;
                updateAt: Date;
                transactionId: string;
                paymentGatewayData: import("@prisma/client/runtime/client").JsonValue | null;
            } | null;
            prescription: {
                createdAt: Date;
                id: string;
                doctorId: string;
                patientId: string;
                appointmentId: string;
                updateAt: Date;
                instructions: string;
                followUpDate: Date | null;
            } | null;
            review: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                doctorId: string;
                patientId: string;
                appointmentId: string;
                rating: number;
                comment: string | null;
            } | null;
            schedule: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                startDateTime: Date;
                endDateTime: Date;
            };
            doctor: {
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
            status: AppointmentStatus;
            id: string;
            doctorId: string;
            scheduleId: string;
            patientId: string;
            videoCallingId: string;
            paymentStatus: PaymentStatus;
            updateAt: Date;
        })[];
    }>;
    updateAppointmentStatus: (appointmentId: string, status: AppointmentStatus, user: IJWTPayload) => Promise<{
        createdAt: Date;
        status: AppointmentStatus;
        id: string;
        doctorId: string;
        scheduleId: string;
        patientId: string;
        videoCallingId: string;
        paymentStatus: PaymentStatus;
        updateAt: Date;
    }>;
    cancelUnpaidAppointments: () => Promise<void>;
    getAllFromDB: (filters: any, options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: ({
            payment: {
                createdAt: Date;
                status: PaymentStatus;
                id: string;
                appointmentId: string;
                amount: number;
                updateAt: Date;
                transactionId: string;
                paymentGatewayData: import("@prisma/client/runtime/client").JsonValue | null;
            } | null;
            prescription: {
                createdAt: Date;
                id: string;
                doctorId: string;
                patientId: string;
                appointmentId: string;
                updateAt: Date;
                instructions: string;
                followUpDate: Date | null;
            } | null;
            review: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                doctorId: string;
                patientId: string;
                appointmentId: string;
                rating: number;
                comment: string | null;
            } | null;
            schedule: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                startDateTime: Date;
                endDateTime: Date;
            };
            doctor: {
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
            status: AppointmentStatus;
            id: string;
            doctorId: string;
            scheduleId: string;
            patientId: string;
            videoCallingId: string;
            paymentStatus: PaymentStatus;
            updateAt: Date;
        })[];
    }>;
    createAppointmentWithPayLater: (user: IAuthUser, payload: any) => Promise<{
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
        status: AppointmentStatus;
        id: string;
        doctorId: string;
        scheduleId: string;
        patientId: string;
        videoCallingId: string;
        paymentStatus: PaymentStatus;
        updateAt: Date;
    }>;
    initiatePaymentForAppointment: (appointmentId: string, user: IAuthUser) => Promise<{
        paymentUrl: string | null;
    }>;
};
//# sourceMappingURL=appointment.service.d.ts.map