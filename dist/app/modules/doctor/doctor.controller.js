import pick from "../../helper/pick";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { DoctorService } from "./doctor.service";
import { doctorFilterableFields } from "./doctor.constant";
import httpStatus from "http-status";
const getAllFromDB = catchAsync(async (req, res) => {
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const fillters = pick(req.query, doctorFilterableFields);
    const result = await DoctorService.getAllFromDB(fillters, options);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Doctor fetched successfully!",
        meta: result.meta,
        data: result.data
    });
});
const updateIntoDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await DoctorService.updateIntoDB(id, req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Doctor updated successfully!",
        // meta: result.meta,
        data: result
    });
});
const getAISuggestions = catchAsync(async (req, res) => {
    const result = await DoctorService.getAISuggestions(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'AI suggestions fetched successfully',
        data: result,
    });
});
const getByIdFromDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await DoctorService.getByIdFromDB(id);
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
};
//# sourceMappingURL=doctor.controller.js.map