import { type Prescription } from "../../../../generated/prisma/client";
import type { IJWTPayload } from '../../types/common';
import { type IOptions } from '../../helper/paginationHelper';
import type { IPaginationOptions } from '../../interfaces/pagination';
export declare const PrescriptionService: {
    createPrescription: (user: IJWTPayload, payload: Partial<Prescription>) => Promise<any>;
    patientPrescription: (user: IJWTPayload, options: IOptions) => Promise<{
        meta: {
            total: any;
            page: any;
            limit: any;
        };
        data: any;
    }>;
    getAllFromDB: (filters: any, options: IPaginationOptions) => Promise<{
        meta: {
            total: any;
            page: any;
            limit: any;
        };
        data: any;
    }>;
};
//# sourceMappingURL=prescription.service.d.ts.map