export declare const UserRole: {
    readonly DOCTOR: "DOCTOR";
    readonly PATIENT: "PATIENT";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly DELETED: "DELETED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const Gender: {
    readonly MALE: "MALE";
    readonly FEMALE: "FEMALE";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
export declare const AppointmentStatus: {
    readonly SCHEDULED: "SCHEDULED";
    readonly INPROGRESS: "INPROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly CANCEL: "CANCEL";
};
export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus];
export declare const PaymentStatus: {
    readonly PAID: "PAID";
    readonly UNPAID: "UNPAID";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const BloodGroup: {
    readonly A_POSITIVE: "A_POSITIVE";
    readonly B_POSITIVE: "B_POSITIVE";
    readonly O_POSITIVE: "O_POSITIVE";
    readonly AB_POSITIVE: "AB_POSITIVE";
    readonly A_NEGATIVE: "A_NEGATIVE";
    readonly B_NEGATIVE: "B_NEGATIVE";
    readonly O_NEGATIVE: "O_NEGATIVE";
    readonly AB_NEGATIVE: "AB_NEGATIVE";
};
export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup];
export declare const MaritalStatus: {
    readonly MARRIED: "MARRIED";
    readonly UNMARRIED: "UNMARRIED";
};
export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus];
//# sourceMappingURL=enums.d.ts.map