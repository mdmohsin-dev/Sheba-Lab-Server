import catchAsync from "../../shared/catchAsync";
import { PrescriptionService } from "./prescription.service";
import sendResponse from "../../shared/sendResponse";
import pick from "../../helper/pick";
import httpStatus from "http-status";
import { prescriptionFilterableFields } from "./prescription.constants";
const createPrescription = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await PrescriptionService.createPrescription(user, req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "prescription created successfully!",
        data: result
    });
});
const patientPrescription = catchAsync(async (req, res) => {
    const user = req.user;
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await PrescriptionService.patientPrescription(user, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Prescription fetched successfully',
        meta: result.meta,
        data: result.data
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
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
};
//# sourceMappingURL=prescription.controller.js.map