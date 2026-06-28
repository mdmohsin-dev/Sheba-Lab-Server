import type { Request, Response } from "express";
import httpStatus from "http-status"
import catchAsync from "../../shared/catchAsync.ts";
import pick from "../../helper/pick.ts";
import { doctorFilterableFields } from "./doctor.constant.ts";
import { DoctorService } from "./doctor.service.ts";
import sendResponse from "../../shared/sendResponse.ts";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const fillters = pick(req.query, doctorFilterableFields)

    const result = await DoctorService.getAllFromDB(fillters, options);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Doctor fetched successfully!",
        meta: result.meta,
        data: result.data
    })
})



const updateIntoDB = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params

    const result = await DoctorService.updateIntoDB(id as string, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Doctor updated successfully!",
        // meta: result.meta,
        data: result
    })
})


const getAISuggestions = catchAsync(async (req: Request, res: Response) => {
    const result = await DoctorService.getAISuggestions(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'AI suggestions fetched successfully',
        data: result,
    });
});


const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DoctorService.getByIdFromDB(id as string);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Doctor retrieval successfully',
        data: result,
    });
});


export const DoctorController = {
    getAllFromDB,
    updateIntoDB,
    getAISuggestions,
    getByIdFromDB
}