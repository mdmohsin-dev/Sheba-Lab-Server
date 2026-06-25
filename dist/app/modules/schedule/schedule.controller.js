import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ScheduleService } from "./schedule.service";
import pick from "../../helper/pick";
const insertIntoDB = catchAsync(async (req, res) => {
    const result = await ScheduleService.insertIntoDB(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Schedule created successfully",
        data: result
    });
});
const schedulesForDoctor = catchAsync(async (req, res) => {
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const filters = pick(req.query, ["startDateTime", "endDateTime"]);
    const user = req.user;
    const result = await ScheduleService.schedulesForDoctor(user, filters, options);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Schedule fetched successfully",
        meta: result.meta,
        data: result.data
    });
});
const deleteSchedle = catchAsync(async (req, res) => {
    const result = await ScheduleService.deleteScheduleFromDB(req.params.id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Schedule deleted successfully",
        data: result
    });
});
export const ScheduleController = {
    insertIntoDB,
    schedulesForDoctor,
    deleteSchedle
};
//# sourceMappingURL=schedule.controller.js.map