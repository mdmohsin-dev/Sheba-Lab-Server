import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Appointment
 *
 */
export type Appointment = Prisma.AppointmentModel;
/**
 * Model Payment
 *
 */
export type Payment = Prisma.PaymentModel;
/**
 * Model Prescription
 *
 */
export type Prescription = Prisma.PrescriptionModel;
/**
 * Model Review
 *
 */
export type Review = Prisma.ReviewModel;
/**
 * Model PatientHealthData
 *
 */
export type PatientHealthData = Prisma.PatientHealthDataModel;
/**
 * Model MedicalReport
 *
 */
export type MedicalReport = Prisma.MedicalReportModel;
/**
 * Model Schedule
 *
 */
export type Schedule = Prisma.ScheduleModel;
/**
 * Model DoctorSchedules
 *
 */
export type DoctorSchedules = Prisma.DoctorSchedulesModel;
/**
 * Model Specialties
 *
 */
export type Specialties = Prisma.SpecialtiesModel;
/**
 * Model DoctorSpecialties
 *
 */
export type DoctorSpecialties = Prisma.DoctorSpecialtiesModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Admin
 *
 */
export type Admin = Prisma.AdminModel;
/**
 * Model Doctor
 *
 */
export type Doctor = Prisma.DoctorModel;
/**
 * Model Patient
 *
 */
export type Patient = Prisma.PatientModel;
//# sourceMappingURL=client.d.ts.map