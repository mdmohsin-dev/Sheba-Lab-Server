import type { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync.ts";
import type { IJWTPayload } from "../../types/common.ts";
import { ReviewService } from "./review.service.ts";
import sendResponse from "../../shared/sendResponse.ts";
import { reviewFilterableFields } from "./review.constant.ts";
import pick from "../../helper/pick.ts";

const insertIntoDB = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user;
    const result = await ReviewService.insertIntoDB(user as IJWTPayload, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Review created successfully',
        data: result,
    });
});


const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, reviewFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await ReviewService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Reviews retrieval successfully',
        meta: result.meta,
        data: result.data,
    });
});

export const ReviewController = {
    insertIntoDB,
    getAllFromDB
}