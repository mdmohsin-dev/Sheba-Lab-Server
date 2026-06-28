import type { Request, Response } from "express";
import httpStatus from "http-status"
import catchAsync from "../../shared/catchAsync.ts";
import { PrescriptionService } from "./prescription.service.ts";
import sendResponse from "../../shared/sendResponse.ts";
import pick from "../../helper/pick.ts";
import type { IJWTPayload } from "../../types/common.ts";
import { prescriptionFilterableFields } from "./prescription.constants.ts";

const createPrescription = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user;
    const result = await PrescriptionService.createPrescription(user as IJWTPayload, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "prescription created successfully!",
        data: result
    })
})


const patientPrescription = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user;
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
    const result = await PrescriptionService.patientPrescription(user as IJWTPayload, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Prescription fetched successfully',
        meta: result.meta,
        data: result.data
    });
});


const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, prescriptionFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await PrescriptionService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Prescriptions retrieval successfully',
        meta: result.meta,
        data: result.data,
    });
});


export const PrescriptionController = {
    createPrescription,
    patientPrescription,
    getAllFromDB
}