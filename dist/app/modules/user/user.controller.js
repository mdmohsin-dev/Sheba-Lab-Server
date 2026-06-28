import catchAsync from "../../shared/catchAsync";
import { UserService } from "./user.service";
import sendResponse from "../../shared/sendResponse";
import pick from "../../helper/pick";
import { userFilterableFields } from "./user.constant";
import httpStatus from "http-status";
const createPatient = catchAsync(async (req, res) => {
    const result = await UserService.createPatient(req);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Patient created successfully",
        data: result
    });
});
const createDoctor = catchAsync(async (req, res) => {
    const result = await UserService.createDoctor(req);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Doctor Created successfuly!",
        data: result
    });
});
const createAdmin = catchAsync(async (req, res) => {
    const result = await UserService.createAdmin(req);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Admin Created successfuly!",
        data: result
    });
});
const getMyProfile = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await UserService.getMyProfile(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "My profile data fetched!",
        data: result
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const filters = pick(req.query, userFilterableFields);
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const result = await UserService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User retrive successfuly!",
        meta: result.meta,
        data: result
    });
});
const changeProfileStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await UserService.changeProfileStatus(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Users profile status changed!",
        data: result
    });
});
export const UserController = {
    createPatient,
    createDoctor,
    getAllFromDB,
    createAdmin,
    getMyProfile,
    changeProfileStatus
};
//# sourceMappingURL=user.controller.js.map