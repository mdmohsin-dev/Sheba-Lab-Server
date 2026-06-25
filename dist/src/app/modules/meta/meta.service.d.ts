import type { IJWTPayload } from "../../types/common";
export declare const MetaService: {
    fetchDashboardMetaData: (user: IJWTPayload) => Promise<{
        patientCount: number;
        doctorCount: number;
        adminCount: number;
        appointmentCount: number;
        paymentCount: number;
        totalRevenue: import("../../../../generated/prisma/models").GetPaymentAggregateType<{
            _sum: {
                amount: true;
            };
            where: {
                status: "PAID";
            };
        }>;
        barChartData: unknown;
        pieChartData: {
            status: import("../../../../generated/prisma/enums").AppointmentStatus;
            count: number;
        }[];
    } | {
        appointmentCount: number;
        reviewCount: number;
        patientCount: number;
        totalRevenue: import("../../../../generated/prisma/models").GetPaymentAggregateType<{
            _sum: {
                amount: true;
            };
            where: {
                appointment: {
                    doctorId: string;
                };
                status: "PAID";
            };
        }>;
        formattedAppointmentStatusDistribution: {
            status: import("../../../../generated/prisma/enums").AppointmentStatus;
            count: number;
        }[];
    } | {
        appointmentCount: number;
        prescriptionCount: number;
        reviewCount: number;
        formattedAppointmentStatusDistribution: {
            status: import("../../../../generated/prisma/enums").AppointmentStatus;
            count: number;
        }[];
    }>;
};
//# sourceMappingURL=meta.service.d.ts.map