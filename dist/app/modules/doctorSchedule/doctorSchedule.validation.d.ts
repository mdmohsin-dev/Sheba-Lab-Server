import z from "zod";
export declare const DoctorScheduleValidation: {
    createDoctorScheduleValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            scheduleIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=doctorSchedule.validation.d.ts.map