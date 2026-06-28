import z from "zod"
import { Gender } from "../../../generated/prisma/enums.ts";

const createPatientValidationSchema = z.object({
    password: z.string(),
    patient: z.object({
        name: z.string().nonempty("Name is required"),
        email: z.string().nonempty("Email is required"),
        address: z.string().optional()
    })
})


const createDoctorValidationSchema = z.object({
    password: z.string(),
    doctor: z.object({
        name: z.string({ error: "Name is required" }),
        email: z.string({ error: "Email is required" }),
        profilePhoto: z.string().optional(),
        contactNumber: z.string().optional(),
        address: z.string().optional(),
        registrationNumber: z.string({ error: "Registration number is required" }),
        experience: z.number().optional(),
        gender: z.enum([Gender.MALE, Gender.FEMALE]),
        appointmentFee: z.number({ error: "Appointment fee is required" }),
        qualification: z.string({ error: "Qualification is required" }),
        currentWorkingPlace: z.string({ error: "Current workplace is required" }),
    })
})


const createAdminValidationSchema = z.object({
    password: z.string({
        error: "Password is required"
    }),
    admin: z.object({
        name: z.string({
            error: "Name is required!"
        }),
        email: z.string({
            error: "Email is required!"
        })
    })
});


export const userValidation = {
    createPatientValidationSchema,
    createDoctorValidationSchema,
    createAdminValidationSchema
}