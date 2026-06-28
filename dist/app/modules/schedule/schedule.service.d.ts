import { type IOptions } from "../../helper/paginationHelper";
import type { IJWTPayload } from "../../types/common";
export declare const ScheduleService: {
    insertIntoDB: (payload: any) => Promise<any[]>;
    schedulesForDoctor: (user: IJWTPayload, filters: any, options: IOptions) => Promise<{
        meta: {
            page: any;
            limit: any;
            total: any;
        };
        data: any;
    }>;
    deleteScheduleFromDB: (id: string) => Promise<any>;
};
//# sourceMappingURL=schedule.service.d.ts.map