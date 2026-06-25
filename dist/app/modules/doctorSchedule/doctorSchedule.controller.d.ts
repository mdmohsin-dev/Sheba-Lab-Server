import type { Request, Response } from "express";
export declare const DoctorScheduleController: {
    insertIntoDB: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllFromDB: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteFromDB: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getMySchedule: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=doctorSchedule.controller.d.ts.map