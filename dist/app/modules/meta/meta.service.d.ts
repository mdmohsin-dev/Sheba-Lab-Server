import type { IJWTPayload } from "../../types/common";
export declare const MetaService: {
    fetchDashboardMetaData: (user: IJWTPayload) => Promise<{
        patientCount: any;
        doctorCount: any;
        adminCount: any;
        appointmentCount: any;
        paymentCount: any;
        totalRevenue: any;
        barChartData: any;
        pieChartData: any;
    } | {
        appointmentCount: any;
        reviewCount: any;
        patientCount: any;
        totalRevenue: any;
        formattedAppointmentStatusDistribution: any;
    } | {
        appointmentCount: any;
        prescriptionCount: any;
        reviewCount: any;
        formattedAppointmentStatusDistribution: any;
    }>;
};
//# sourceMappingURL=meta.service.d.ts.map