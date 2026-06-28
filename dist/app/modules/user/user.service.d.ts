import type { Request } from "express";
import { UserStatus } from "../../../../generated/prisma/enums";
import type { IJWTPayload } from "../../types/common";
export declare const UserService: {
    createPatient: (req: Request) => Promise<any>;
    createDoctor: (req: Request) => Promise<any>;
    getAllFromDB: (params: any, options: any) => Promise<{
        meta: {
            page: any;
            limit: any;
            total: any;
        };
        data: any;
    }>;
    createAdmin: (req: Request) => Promise<any>;
    getMyProfile: (user: IJWTPayload) => Promise<any>;
    changeProfileStatus: (id: string, payload: {
        status: UserStatus;
    }) => Promise<any>;
};
//# sourceMappingURL=user.service.d.ts.map