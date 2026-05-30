import bcrypt from "bcryptjs";
import type { createPatientInput } from "./user.interface";
import { prisma } from "../../../../lib/prisma";

const createPatient = async (payload: createPatientInput) => {
    const hashedPassword = await bcrypt.hash(payload.password, parseInt(process.env.BCRYPT_SALT_ROUNDS as string))

    const result = await prisma.$transaction(async(tnx)=>{
        await tnx.user.create({
            data: {
                email: payload.email,
                password: hashedPassword,
            }
        });
       return await tnx.patient.create({
            data: {
                name: payload.name,
                email: payload.email,
            }
        })
    })
    return result;
}


export const UserService = {
    createPatient
}