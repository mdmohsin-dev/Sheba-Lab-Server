import { type IOptions } from "../../helper/paginationHelper";
import type { Doctor } from "../../../../generated/prisma/client";
import type { IDoctorUpdateInput } from "./doctor.interface";
export declare const DoctorService: {
    getAllFromDB: (filters: any, options: IOptions) => Promise<{
        meta: {
            total: any;
            page: any;
            limit: any;
        };
        data: any;
    }>;
    updateIntoDB: (id: string, payload: Partial<IDoctorUpdateInput>) => Promise<any>;
    getAISuggestions: (payload: {
        symptoms: string;
    }) => Promise<any>;
    getByIdFromDB: (id: string) => Promise<Doctor | null>;
};
//# sourceMappingURL=doctor.service.d.ts.map