import { JwtHelper } from "../helper/jwtHelper";
import config from "../../config";
const auth = (...roles) => {
    return async (req, res, next) => {
        try {
            const token = req.cookies.accessToken;
            if (!token) {
                throw new Error("You are not authorized!");
            }
            const verifyUser = JwtHelper.verifyToken(token, config.jwt.jwt_access_secret);
            req.user = verifyUser;
            if (roles.length && !roles.includes(verifyUser.role)) {
                throw new Error("You are not authorized!");
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
export default auth;
//# sourceMappingURL=auth.js.map