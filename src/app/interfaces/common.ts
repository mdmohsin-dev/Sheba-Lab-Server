import type { UserRole } from "../../generated/prisma/enums.ts";

export type IAuthUser = {
    email: string;
    role: UserRole
} | null;