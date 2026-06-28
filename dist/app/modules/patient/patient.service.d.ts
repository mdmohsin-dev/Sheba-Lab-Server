import { type IOptions } from '../../helper/paginationHelper';
import { type Patient } from '../../../../generated/prisma/client';
import type { IJWTPayload } from '../../types/common';
import type { IPatientFilterRequest } from './patient.interface';
export declare const PatientService: {
    getAllFromDB: (filters: IPatientFilterRequest, options: IOptions) => Promise<{
        meta: {
            total: any;
            page: any;
            limit: any;
        };
        data: any;
    }>;
    getByIdFromDB: (id: string) => Promise<Patient | null>;
    softDelete: (id: string) => Promise<Patient | null>;
    updateIntoDB: (user: IJWTPayload, payload: any) => Promise<any>;
};
//# sourceMappingURL=patient.service.d.ts.map