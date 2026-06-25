import type { Request } from "express";
import { UserRole, UserStatus } from "../../../../generated/prisma/enums";
import type { IJWTPayload } from "../../types/common";
export declare const UserService: {
    createPatient: (req: Request) => Promise<{
        createdAt: Date;
        email: string;
        name: string;
        id: string;
        profilePhoto: string | null;
        contactNumber: string | null;
        address: string | null;
        isdeleted: boolean;
        updatedAt: Date;
    }>;
    createDoctor: (req: Request) => Promise<{
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
    getAllFromDB: (params: any, options: any) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: {
            createdAt: Date;
            email: string;
            status: UserStatus;
            role: UserRole;
            id: string;
            updatedAt: Date;
            password: string | null;
            needPasswordChange: boolean;
        }[];
    }>;
    createAdmin: (req: Request) => Promise<{
        createdAt: Date;
        email: string;
        name: string;
        id: string;
        profilePhoto: string | null;
        contactNumber: string | null;
        isdeleted: boolean;
        updatedAt: Date;
    }>;
    getMyProfile: (user: IJWTPayload) => Promise<{
        createdAt?: Date;
        email: string;
        name?: string;
        id: string;
        profilePhoto?: string | null;
        contactNumber?: string | null;
        isdeleted?: boolean;
        updatedAt?: Date;
        status: UserStatus;
        role: UserRole;
        needPasswordChange: boolean;
    }>;
    changeProfileStatus: (id: string, payload: {
        status: UserStatus;
    }) => Promise<{
        createdAt: Date;
        email: string;
        status: UserStatus;
        role: UserRole;
        id: string;
        updatedAt: Date;
        password: string | null;
        needPasswordChange: boolean;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map