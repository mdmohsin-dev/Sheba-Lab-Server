import type { Request, Response } from "express";
import httpStatus from "http-status"
import catchAsync from "../../shared/catchAsync.ts";
import type { IJWTPayload } from "../../types/common.ts";
import { AppointmentService } from "./appointment.service.ts";
import sendResponse from "../../shared/sendResponse.ts";
import pick from "../../helper/pick.ts";
import { appointmentFilterableFields } from "./appointment.constant.ts";
import APIError from "../../errors/APIError.ts";
import type { IAuthUser } from "../../interfaces/common.ts";



const createAppointment = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user;
    const result = await AppointmentService.createAppointment(user as IJWTPayload, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Appointment created successfully!",
        data: result
    })
});



const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, appointmentFilterableFields)
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await AppointmentService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Appointment retrieval successfully',
        meta: result.meta,
        data: result.data,
    });
});



const getMyAppointment = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const fillters = pick(req.query, ["status", "paymentStatus"])
    const user = req.user;
    const result = await AppointmentService.getMyAppointment(user as IJWTPayload, fillters, options);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Appointment fetched successfully!",
        data: result.data,
        meta: result.meta
    })
})




const updateAppointmentStatus = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;
    const user = req.user;

    const result = await AppointmentService.updateAppointmentStatus(id as string, status, user as IJWTPayload);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Appointment updated successfully!",
        data: result
    })
})



const changeAppointmentStatus = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;
    const user = req.user;

    if (!user) {
        throw new APIError(httpStatus.UNAUTHORIZED, "Unauthorized access");
    }

    const result = await AppointmentService.updateAppointmentStatus(id as string, status, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Appointment status changed successfully',
        data: result
    });
});



const createAppointmentWithPayLater = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {
    const user = req.user;

    const result = await AppointmentService.createAppointmentWithPayLater(user as IAuthUser, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Appointment booked successfully! You can pay later.",
        data: result
    })
});



const initiatePayment = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {
    const user = req.user;
    const { id } = req.params;

    const result = await AppointmentService.initiatePaymentForAppointment(id as string, user as IAuthUser);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Payment session created successfully",
        data: result
    })
});


export const AppointmentController = {
    createAppointment,
    getMyAppointment,
    updateAppointmentStatus,
    initiatePayment,
    createAppointmentWithPayLater,
    changeAppointmentStatus,
    getAllFromDB
}