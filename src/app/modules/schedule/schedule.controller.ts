import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync.ts";
import { ScheduleService } from "./schedule.service.ts";
import sendResponse from "../../shared/sendResponse.ts";
import type { IJWTPayload } from "../../types/common.ts";
import pick from "../../helper/pick.ts";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {

    const result = await ScheduleService.insertIntoDB(req.body)

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Schedule created successfully",
        data: result
    })
})



const schedulesForDoctor = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {

    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"])
    const filters = pick(req.query, ["startDateTime", "endDateTime"])

    const user = req.user
    const result = await ScheduleService.schedulesForDoctor(user as IJWTPayload ,filters, options)

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Schedule fetched successfully",
        meta: result.meta,
        data: result.data
    })
})



const deleteSchedle = catchAsync(async (req: Request, res: Response) => {

    const result = await ScheduleService.deleteScheduleFromDB(req.params.id as string)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Schedule deleted successfully",
        data: result
    })
})


export const ScheduleController = {
    insertIntoDB,
    schedulesForDoctor,
    deleteSchedle
}