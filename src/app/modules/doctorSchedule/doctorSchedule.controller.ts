import type { Request, Response } from "express"
import catchAsync from "../../shared/catchAsync"
import sendResponse from "../../shared/sendResponse"
import { DoctorScheduceService } from "./doctorSchedule.service"
import type { IJWTPayload } from "../../types/common"

const insertIntoDB = catchAsync(async (req: Request &{user?:IJWTPayload}, res: Response) => {

    const user = req.user

    const result = await DoctorScheduceService.insertIntoDB(user as IJWTPayload,req.body)

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Doctor Schedule created successfully",
        data: result
    })
})

export const DoctorScheduleController = {
    insertIntoDB
}