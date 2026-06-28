import type { UserRole } from "../../generated/prisma/enums.ts";

export type IJWTPayload={
    email:string;
    role:UserRole
}