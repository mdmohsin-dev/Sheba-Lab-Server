import { prisma } from "../../../../lib/prisma"
import type { IJWTPayload } from "../../types/common"


const insertIntoDB = async (user: IJWTPayload, payload: { scheduleIds: string[] }) => {

    const doctorData = await prisma.doctor.findUniqueOrThrow({
        where: {
            email: user.email
        }
    })

    const doctorSchedulesData = payload.scheduleIds.map(scheduleId => ({
        doctorId: doctorData.id,
        scheduleId
    }))

    return await prisma.doctorSchedules.createMany({
        data: doctorSchedulesData
    })
}

export const DoctorScheduceService = {
    insertIntoDB
}