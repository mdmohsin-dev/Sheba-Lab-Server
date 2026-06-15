import bcrypt from "bcryptjs";
import { UserStatus } from "../../../../generated/prisma/enums";
import { prisma } from "../../../../lib/prisma";
import { JwtHelper } from "../../helper/jwtHelper";
import config from "../../../config";
import APIError from "../../errors/APIError";
import httpStatus from "http-status"

const login = async (payload: { email: string; password: string }) => {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
            status: UserStatus.ACTIVE
        }
    })

    const isPasswwordMatched = await bcrypt.compare(payload.password, user.password!)
    if (!isPasswwordMatched) {
        throw new APIError(httpStatus.BAD_REQUEST,"Invalid credentials")
    }

    const accessToken = JwtHelper.generateToken({ email: user.email, role: user.role }, config.jwt_access_secret, "1h")

    const refreshToken = JwtHelper.generateToken({ email: user.email, role: user.role }, config.jwt_refresh_secret, "90d")

    return {
        accessToken,
        refreshToken,
        needPasswordChange: user.needPasswordChange
    }
}

export const AuthService = {
    login
}