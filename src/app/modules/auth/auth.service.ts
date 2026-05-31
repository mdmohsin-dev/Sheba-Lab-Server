import bcrypt from "bcryptjs";
import { UserStatus } from "../../../../generated/prisma/enums";
import { prisma } from "../../../../lib/prisma";
import jwt from "jsonwebtoken";
import { JwtHelper } from "../../helper/jwtHelper";

const login = async (payload: { email: string; password: string }) => {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
            status: UserStatus.ACTIVE
        }
    })

    const isPasswwordMatched = await bcrypt.compare(payload.password, user.password!)
    if (!isPasswwordMatched) {
        throw new Error("Invalid credentials")
    }

    const accessToken = JwtHelper.generateToken({ email: user.email, role: user.role }, "abcdabcd", "1h")

    const refreshToken = JwtHelper.generateToken({ email: user.email, role: user.role }, "abcdabcd", "90d")

    return {
        accessToken,
        refreshToken,
        needPasswordChange: user.needPasswordChange
    }
}

export const AuthService = {
    login
}