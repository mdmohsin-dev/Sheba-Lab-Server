import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { AppointmentService } from "./appointment.service";
import pick from "../../helper/pick";
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
export const AppointmentController = {
    createAppointment,
    getMyAppointment,
    updateAppointmentStatus
};
//# sourceMappingURL=appointment.controller.js.map