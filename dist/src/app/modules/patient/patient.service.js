import { paginationHelper } from '../../helper/paginationHelper';
import { UserStatus } from '../../../../generated/prisma/client';
import { patientSearchableFields } from './patient.constant';
import { prisma } from '../../../../lib/prisma';
const getAllFromDB = async (filters, options) => {
    const { limit, page, skip } = paginationHelper.calculatePagination(options);
    const { searchTerm, ...filterData } = filters;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: patientSearchableFields.map(field => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            })),
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => {
                return {
                    [key]: {
                        equals: filterData[key],
                    },
                };
            }),
        });
    }
    andConditions.push({
        isdeleted: false,
    });
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma.patient.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? { [options.sortBy]: options.sortOrder }
            : {
                createdAt: 'desc',
            }
    });
    const total = await prisma.patient.count({
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
const getByIdFromDB = async (id) => {
    const result = await prisma.patient.findUnique({
        where: {
            id,
            isdeleted: false,
        },
    });
    return result;
};
const softDelete = async (id) => {
    return await prisma.$transaction(async (transactionClient) => {
        const deletedPatient = await transactionClient.patient.update({
            where: { id },
            data: {
                isdeleted: true,
            },
        });
        await transactionClient.user.update({
            where: {
                email: deletedPatient.email,
            },
            data: {
                status: UserStatus.DELETED,
            },
        });
        return deletedPatient;
    });
};
// PatientHealthData, MedicalReport, patient
const updateIntoDB = async (user, payload) => {
    const { medicalReport, patientHealthData, ...patientData } = payload;
    const patientInfo = await prisma.patient.findUniqueOrThrow({
        where: {
            email: user.email,
            isdeleted: false
        }
    });
    return await prisma.$transaction(async (tnx) => {
        await tnx.patient.update({
            where: {
                id: patientInfo.id
            },
            data: patientData
        });
        if (patientHealthData) {
            await tnx.patientHealthData.upsert({
                where: {
                    patientId: patientInfo.id
                },
                update: patientHealthData,
                create: {
                    ...patientHealthData,
                    patientId: patientInfo.id
                }
            });
        }
        if (medicalReport) {
            await tnx.medicalReport.create({
                data: {
                    ...medicalReport,
                    patientId: patientInfo.id
                }
            });
        }
        const result = await tnx.patient.findUnique({
            where: {
                id: patientInfo.id
            },
            include: {
                patientHealthData: true,
                medicalReports: true
            }
        });
        return result;
    });
};
export const PatientService = {
    getAllFromDB,
    getByIdFromDB,
    softDelete,
    updateIntoDB
};
//# sourceMappingURL=patient.service.js.map