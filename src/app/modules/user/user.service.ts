import bcrypt from "bcryptjs";
import { prisma } from "../../../../lib/prisma";
import type { Request } from "express";
import { FileUploader } from "../../helper/FileUploader";
import { UserRole } from "../../../../generated/prisma/enums";
import { paginationHelper } from "../../helper/paginationHelper";
import type { Prisma } from "../../../../generated/prisma/client";
import { userSearchableFields } from "./user.constant";

const createPatient = async (req: Request) => {
    if (req.file) {
        const uploadResult = await FileUploader.uploadToCloudinary(req.file);
        req.body.patient.profilePhoto = uploadResult?.secure_url;
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        parseInt(process.env.BCRYPT_SALT_ROUNDS as string)
    );

    const result = await prisma.$transaction(async (tnx) => {
        await tnx.user.create({
            data: {
                email: req.body.patient.email,
                password: hashedPassword,
                role: UserRole.PATIENT, // ✅ role add করা হয়েছে
            },
        });
        return await tnx.patient.create({
            data: req.body.patient,
        });
    });
    return result;
};

const createDoctor = async (req: Request) => {
    if (req.file) {
        const uploadResult = await FileUploader.uploadToCloudinary(req.file);
        req.body.doctor.profilePhoto = uploadResult?.secure_url;
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        parseInt(process.env.BCRYPT_SALT_ROUNDS as string)
    );

    const userData = {
        email: req.body.doctor.email,
        password: hashedPassword,
        role: UserRole.DOCTOR,
    };

    const result = await prisma.$transaction(async (tnx) => {
        await tnx.user.create({ data: userData });

        const createDoctorData = await tnx.doctor.create({
            data: req.body.doctor,
        });

        return createDoctorData;
    });

    return result;
};

const createAdmin = async (req: Request) => {
    if (req.file) {
        const uploadResult = await FileUploader.uploadToCloudinary(req.file);
        req.body.admin.profilePhoto = uploadResult?.secure_url;
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        parseInt(process.env.BCRYPT_SALT_ROUNDS as string)
    );

    const adminData = {
        email: req.body.admin.email,
        password: hashedPassword,
        role: UserRole.ADMIN,
    };

    const result = await prisma.$transaction(async (tnx) => {
        await tnx.user.create({ data: adminData });

        const admin = await tnx.admin.create({ // ✅ user → admin, await add
            data: req.body.admin,
        });

        return admin;
    });

    return result;
};

const getAllFromDB = async (params: any, options: any) => {
    const { page, limit, skip, sortBy, sortOrder } =
        paginationHelper.calculatePagination(options);

    const { searchTerm, ...filterData } = params;

    const andCondition: Prisma.UserWhereInput[] = [];

    if (searchTerm) {
        andCondition.push({
            OR: userSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive", // ✅ typo fix
                },
            })),
        });
    }

    if (Object.keys(filterData).length > 0) {
        andCondition.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: (filterData as any)[key],
                },
            })),
        });
    }

    const whereConditions: Prisma.UserWhereInput = andCondition.length > 0 ? {
        AND: andCondition
    } : {}

    const result = await prisma.user.findMany({
        skip,
        take: limit,
        where: whereConditions,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });

    const total = await prisma.user.count({
        where: whereConditions
    });

    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
};

export const UserService = {
    createPatient,
    createDoctor,
    getAllFromDB,
    createAdmin,
};