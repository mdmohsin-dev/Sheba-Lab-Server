import bcrypt from "bcryptjs";
import { prisma } from "../../../../lib/prisma";
import type { Request } from "express";
import { FileUploader } from "../../helper/FileUploader";
import { UserRole } from "../../../../generated/prisma/enums";

const createPatient = async (req: Request) => {
    if (req.file) {
        const uploadResult = await FileUploader.uploadToCloudinary(req.file)
        req.body.patient.profilePhoto = uploadResult?.secure_url
    }

    const hashedPassword = await bcrypt.hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUNDS as string))

    const result = await prisma.$transaction(async (tnx) => {
        await tnx.user.create({
            data: {
                email: req.body.patient.email,
                password: hashedPassword,
            }
        });
        return await tnx.patient.create({
            data: req.body.patient
        })
    })
    return result;
}



const createDoctor = async (req: Request) => {
    if (req.file) {
        const uploadResult = await FileUploader.uploadToCloudinary(req.file)
        req.body.doctor.profilePhoto = uploadResult?.secure_url
    }

    const hashedPassword = await bcrypt.hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUNDS as string))

    const userData = {
        email: req.body.doctor.email,
        password: hashedPassword,
        role: UserRole.DOCTOR
    }
    const result = await prisma.$transaction(async (tnx) => {

        await tnx.user.create({
            data: userData
        })

        const createDoctorData = await tnx.doctor.create({
            data: req.body.doctor
        })

        return createDoctorData
    })

    return result
}





const createAdmin = async (req: Request) => {
    if (req.file) {
        const uploadResult = await FileUploader.uploadToCloudinary(req.file)
        req.body.admin.profilePhoto = uploadResult?.secure_url
    }

    const hashedPassword = await bcrypt.hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUNDS as string))


    const adminData = {
        email: req.body.admin.email,
        password: hashedPassword,
        role: UserRole.ADMIN
    }
    const result = await prisma.$transaction(async (tnx) => {
        await tnx.user.create({
            data: adminData
        })

        const admin = tnx.user.create({
            data: req.body.admin
        })
        return admin
    })
    return result
}


export const UserService = {
    createPatient,
    createDoctor
}