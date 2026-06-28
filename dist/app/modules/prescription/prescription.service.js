import httpStatus from 'http-status';
import { AppointmentStatus, PaymentStatus, Prisma, UserRole } from "../../../../generated/prisma/client";
import { prisma } from '../../../../lib/prisma';
import APIError from '../../errors/APIError';
import { paginationHelper } from '../../helper/paginationHelper';
const createPrescription = async (user, payload) => {
    if (!payload.appointmentId) {
        throw new Error("Appointment ID is required");
    }
    const appointmentData = await prisma.appointment.findUniqueOrThrow({
        where: {
            id: payload.appointmentId,
            status: AppointmentStatus.COMPLETED,
            paymentStatus: PaymentStatus.PAID
        },
        include: {
            doctor: true
        }
    });
    if (user.role === UserRole.DOCTOR) {
        if (!(user.email === appointmentData.doctor.email))
            throw new APIError(httpStatus.BAD_REQUEST, "This is not your appointment");
    }
    const result = await prisma.prescription.create({
        data: {
            appointmentId: appointmentData.id,
            doctorId: appointmentData.doctorId,
            patientId: appointmentData.patientId,
            instructions: payload.instructions,
            followUpDate: payload.followUpDate || null
        },
        include: {
            patient: true
        }
    });
    return result;
};
const patientPrescription = async (user, options) => {
    const { limit, page, skip, sortBy, sortOrder } = paginationHelper.calculatePagination(options);
    const result = await prisma.prescription.findMany({
        where: {
            patient: {
                email: user.email
            }
        },
        skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder
        },
        include: {
            doctor: true,
            patient: true,
            appointment: true
        }
    });
    const total = await prisma.prescription.count({
        where: {
            patient: {
                email: user.email
            }
        }
    });
    return {
        meta: {
            total,
            page,
            limit
        },
        data: result
    };
};
const getAllFromDB = async (filters, options) => {
    const { limit, page, skip } = paginationHelper.calculatePagination(options);
    const { patientEmail, doctorEmail } = filters;
    const andConditions = [];
    if (patientEmail) {
        andConditions.push({
            patient: {
                email: patientEmail
            }
        });
    }
    if (doctorEmail) {
        andConditions.push({
            doctor: {
                email: doctorEmail
            }
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma.prescription.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? { [options.sortBy]: options.sortOrder }
            : {
                createdAt: 'desc',
            },
        include: {
            doctor: true,
            patient: true,
            appointment: true,
        },
    });
    const total = await prisma.prescription.count({
        where: whereConditions,
    });
    return {
        meta: {
            total,
            page,
            limit,
        },
        data: result,
    };
};
export const PrescriptionService = {
    createPrescription,
    patientPrescription,
    getAllFromDB
};
//# sourceMappingURL=prescription.service.js.map