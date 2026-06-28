import { addHours, addMinutes, format } from "date-fns";
import { prisma } from "../../../lib/prisma.ts";
import type { IJWTPayload } from "../../types/common.ts";
import { paginationHelper, type IOptions } from "../../helper/paginationHelper.ts";
import type { Prisma } from "../../../generated/prisma/client.ts";

const insertIntoDB = async (payload: any) => {
    const { startTime, endTime, startDate, endDate } = payload

    const interValTime = 30;

    const schedules = []

    const currentDate = new Date(startDate)
    const lastDate = new Date(endDate)

    while (currentDate <= lastDate) {
        const startDateTime = new Date(
            addMinutes(
                addHours(
                    `${format(currentDate, "yyyy-MM-dd")}`,
                    Number(startTime.split(":")[0])
                ),
                Number(startTime.split(":")[1])
            )

        )

        const endDateTime = new Date(
            addMinutes(
                addHours(
                    `${format(currentDate, "yyyy-MM-dd")}`,
                    Number(endTime.split(":")[0])
                ),
                Number(endTime.split(":")[1])
            )
        )

        while (startDateTime < endDateTime) {
            const slotStartDateTime = startDateTime
            const slotEndDateTime = addMinutes(startDateTime, interValTime)

            const scheduleData = {
                startDateTime: slotStartDateTime,
                endDateTime: slotEndDateTime
            }

            const existingSchedule = await prisma.schedule.findFirst({
                where: scheduleData
            })

            if (!existingSchedule) {
                const result = await prisma.schedule.create({
                    data: scheduleData
                })
                schedules.push(result)
            }
            slotStartDateTime.setMinutes(slotStartDateTime.getMinutes() + interValTime)
        }
        currentDate.setDate(currentDate.getDate() + 1)
    }

    return schedules
}



const schedulesForDoctor = async (user:IJWTPayload,filters: any, options: IOptions) => {
    const { page, limit, skip, sortBy, sortOrder } =
        paginationHelper.calculatePagination(options);

    const { startDateTime: filterstartDateTime, endDateTime: filterendDateTime } = filters

    const andCondition: Prisma.ScheduleWhereInput[] = [];

    if (filterstartDateTime && filterendDateTime) {
        andCondition.push({
            AND: [
                {
                    startDateTime: {
                        gte: filterstartDateTime
                    }
                },
                {
                    endDateTime: {
                        lte: filterendDateTime
                    }
                }
            ]
        })
    }

    const whereConditions: Prisma.ScheduleWhereInput = andCondition.length > 0 ? {
        AND: andCondition
    } : {}

    const doctorSchedules = await prisma.doctorSchedules.findMany({
        where:{
            doctor:{
                email:user.email
            }
        },
        select:{
            scheduleId:true
        }
    })

    const doctorScheduleIds=doctorSchedules.map(schedule => schedule.scheduleId)

    const result = await prisma.schedule.findMany({
        where:  { ...whereConditions, id: { notIn: doctorScheduleIds } },
        skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
    })

    const total = await prisma.schedule.count({
        where: { ...whereConditions, id: { notIn: doctorScheduleIds } }
    })

    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
}



const deleteScheduleFromDB = async (id: string) => {
    return await prisma.schedule.delete({
        where: { id }
    })
}


export const ScheduleService = {
    insertIntoDB,
    schedulesForDoctor,
    deleteScheduleFromDB
}