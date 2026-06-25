import { type IOptions } from '../../helper/paginationHelper';
import { type Patient } from '../../../../generated/prisma/client';
import type { IJWTPayload } from '../../types/common';
import type { IPatientFilterRequest } from './patient.interface';
export declare const PatientService: {
    getAllFromDB: (filters: IPatientFilterRequest, options: IOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: {
            createdAt: Date;
            email: string;
            name: string;
            id: string;
            profilePhoto: string | null;
            contactNumber: string | null;
            address: string | null;
            isdeleted: boolean;
            updatedAt: Date;
        }[];
    }>;
    getByIdFromDB: (id: string) => Promise<Patient | null>;
    softDelete: (id: string) => Promise<Patient | null>;
    updateIntoDB: (user: IJWTPayload, payload: any) => Promise<({
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
        medicalReports: {
            createdAt: Date;
            id: string;
            updatedAt: Date;
            patientId: string;
            reportName: string;
            reportLink: string;
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
    }) | null>;
};
//# sourceMappingURL=patient.service.d.ts.map