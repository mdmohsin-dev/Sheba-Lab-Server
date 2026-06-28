import z from "zod";
export declare const DoctorScheduleValidation: {
    createDoctorScheduleValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            scheduleIds: z.ZodArray<z.ZodString>;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=doctorSchedule.validation.d.ts.map