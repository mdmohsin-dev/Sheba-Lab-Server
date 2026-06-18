import httpStatus from 'http-status'
import { AppointmentStatus, PaymentStatus, UserRole, type Prescription } from "../../../../generated/prisma/client";
import type { IJWTPayload } from '../../types/common';
import { prisma } from '../../../../lib/prisma';
import APIError from '../../errors/APIError';
import { paginationHelper, type IOptions } from '../../helper/paginationHelper';

const createPrescription = async (user: IJWTPayload, payload: Partial<Prescription>) => {

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
    })

    if (user.role === UserRole.DOCTOR) {
        if (!(user.email === appointmentData.doctor.email))
            throw new APIError(httpStatus.BAD_REQUEST, "This is not your appointment")
    }

    const result = await prisma.prescription.create({
        data: {
            appointmentId: appointmentData.id,
            doctorId: appointmentData.doctorId,
            patientId: appointmentData.patientId,
            instructions: payload.instructions as string,
            followUpDate: payload.followUpDate || null
        },
        include: {
            patient: true
        }
    });

    return result

}

const patientPrescription = async (user: IJWTPayload, options: IOptions) => {
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
    })

    const total = await prisma.prescription.count({
        where: {
            patient: {
                email: user.email
            }
        }
    })

    return {
        meta: {
            total,
            page,
            limit
        },
        data: result
    }

};

export const PrescriptionService = {
    createPrescription,
    patientPrescription
}