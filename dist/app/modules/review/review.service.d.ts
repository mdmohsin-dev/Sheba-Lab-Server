import type { IPaginationOptions } from "../../interfaces/pagination";
import type { IJWTPayload } from "../../types/common";
export declare const ReviewService: {
    insertIntoDB: (user: IJWTPayload, payload: any) => Promise<any>;
    getAllFromDB: (filters: any, options: IPaginationOptions) => Promise<{
        meta: {
            total: any;
            page: any;
            limit: any;
        };
        data: any;
    }>;
};
//# sourceMappingURL=review.service.d.ts.map