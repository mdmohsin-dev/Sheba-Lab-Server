import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { AppointmentService } from "./appointment.service";
import pick from "../../helper/pick";
import httpStatus from "http-status";
import { appointmentFilterableFields } from "./appointment.constant";
import APIError from "../../errors/APIError";
const createAppointment = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await AppointmentService.createAppointment(user, req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Appointment created successfully!",
        data: result
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const filters = pick(req.query, appointmentFilterableFields);
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
const getMyAppointment = catchAsync(async (req, res) => {
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const fillters = pick(req.query, ["status", "paymentStatus"]);
    const user = req.user;
    const result = await AppointmentService.getMyAppointment(user, fillters, options);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Appointment fetched successfully!",
        data: result.data,
        meta: result.meta
    });
});
const updateAppointmentStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const user = req.user;
    const result = await AppointmentService.updateAppointmentStatus(id, status, user);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Appointment updated successfully!",
        data: result
    });
});
const changeAppointmentStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const user = req.user;
    if (!user) {
        throw new APIError(httpStatus.UNAUTHORIZED, "Unauthorized access");
    }
    const result = await AppointmentService.updateAppointmentStatus(id, status, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Appointment status changed successfully',
        data: result
    });
});
const createAppointmentWithPayLater = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await AppointmentService.createAppointmentWithPayLater(user, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Appointment booked successfully! You can pay later.",
        data: result
    });
});
const initiatePayment = catchAsync(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const result = await AppointmentService.initiatePaymentForAppointment(id, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Payment session created successfully",
        data: result
    });
});
export const AppointmentController = {
    createAppointment,
    getMyAppointment,
    updateAppointmentStatus,
    initiatePayment,
    createAppointmentWithPayLater,
    changeAppointmentStatus,
    getAllFromDB
};
//# sourceMappingURL=appointment.controller.js.map