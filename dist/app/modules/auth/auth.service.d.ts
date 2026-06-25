import { UserStatus } from "../../../../generated/prisma/enums";
export declare const AuthService: {
    login: (payload: {
        email: string;
        password: string;
    }) => Promise<{
        accessToken: string;
        refreshToken: string;
        needPasswordChange: boolean;
    }>;
    changePassword: (user: any, payload: any) => Promise<{
        message: string;
    }>;
    forgotPassword: (payload: {
        email: string;
    }) => Promise<void>;
    refreshToken: (token: string) => Promise<{
        accessToken: string;
        refreshToken: string;
        needPasswordChange: boolean;
    }>;
    getMe: (user: any) => Promise<{
        createdAt: Date;
        email: string;
        status: UserStatus;
        role: import("../../../../generated/prisma/enums").UserRole;
        admin: {
            createdAt: Date;
            email: string;
            name: string;
            id: string;
            profilePhoto: string | null;
            contactNumber: string | null;
            isdeleted: boolean;
            updatedAt: Date;
        } | null;
        doctor: {
            createdAt: Date;
            email: string;
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
        } | null;
        patient: {
            createdAt: Date;
            email: string;
            patientHealthData: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                gender: import("../../../../generated/prisma/enums").Gender;
                patientId: string;
                dateOfBirth: string;
                bloodGroup: import("../../../../generated/prisma/enums").BloodGroup;
                hasAllergies: boolean | null;
                hasDiabetes: boolean | null;
                height: string;
                weight: string;
                smokingStatus: boolean | null;
                dietaryPreferences: string | null;
                pregnancyStatus: boolean | null;
                mentalHealthHistory: string | null;
                immunizationStatus: string | null;
                hasPastSurgeries: boolean | null;
                recentAnxiety: boolean | null;
                recentDepression: boolean | null;
                maritalStatus: import("../../../../generated/prisma/enums").MaritalStatus;
            }[];
            name: string;
            id: string;
            profilePhoto: string | null;
            contactNumber: string | null;
            address: string | null;
            isdeleted: boolean;
            updatedAt: Date;
        } | null;
        id: string;
        updatedAt: Date;
        needPasswordChange: boolean;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map