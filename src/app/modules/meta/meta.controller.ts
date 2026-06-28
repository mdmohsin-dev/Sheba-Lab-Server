import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync.ts";
import type { IJWTPayload } from "../../types/common.ts";
import { MetaService } from "./meta.service.ts";
import sendResponse from "../../shared/sendResponse.ts";
import httpStatus from "http-status"


const fetchDashboardMetaData = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {

    const user = req.user;
    const result = await MetaService.fetchDashboardMetaData(user as IJWTPayload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Meta data retrival successfully!",
        data: result
    })
});

export const MetaController = {
    fetchDashboardMetaData
}