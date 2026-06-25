import { type IOptions } from "../../helper/paginationHelper";
import type { IJWTPayload } from "../../types/common";
export declare const ScheduleService: {
    insertIntoDB: (payload: any) => Promise<{
        createdAt: Date;
        id: string;
        updatedAt: Date;
        startDateTime: Date;
        endDateTime: Date;
    }[]>;
    schedulesForDoctor: (user: IJWTPayload, filters: any, options: IOptions) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: {
            createdAt: Date;
            id: string;
            updatedAt: Date;
            startDateTime: Date;
            endDateTime: Date;
        }[];
    }>;
    deleteScheduleFromDB: (id: string) => Promise<{
        createdAt: Date;
        id: string;
        updatedAt: Date;
        startDateTime: Date;
        endDateTime: Date;
    }>;
};
//# sourceMappingURL=schedule.service.d.ts.map