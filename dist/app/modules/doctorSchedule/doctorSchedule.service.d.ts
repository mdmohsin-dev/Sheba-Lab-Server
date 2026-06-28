import type { IAuthUser } from "../../interfaces/common";
import type { IPaginationOptions } from "../../interfaces/pagination";
import type { IJWTPayload } from "../../types/common";
import type { IDoctorScheduleFilterRequest } from "./doctorSchedule.interface";
export declare const DoctorScheduleService: {
    insertIntoDB: (user: IJWTPayload, payload: {
        scheduleIds: string[];
    }) => Promise<any>;
    getMySchedule: (filters: any, options: IPaginationOptions, user: IAuthUser) => Promise<{
        meta: {
            total: any;
            page: any;
            limit: any;
        };
        data: any;
    }>;
    deleteFromDB: (user: IAuthUser, scheduleId: string) => Promise<any>;
    getAllFromDB: (filters: IDoctorScheduleFilterRequest, options: IPaginationOptions) => Promise<{
        meta: {
            total: any;
            page: any;
            limit: any;
        };
        data: any;
    }>;
};
//# sourceMappingURL=doctorSchedule.service.d.ts.map