import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    cloudinary: {
        api_secret: process.env.CLOUDINARY_API_SECRET,
        cloude_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY
    },
    jwt: {
        jwt_refresh_token_expires_in: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
        jwt_reset_pass_secret: process.env.RESET_PASS_SECRET,
        jwt_reset_pass_link: process.env.RESET_PASS_LINK,
        jwt_access_token_expires: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
        jwt_access_secret: process.env.JWT_ACCESS_SECRET,
        jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
        solt_round: process.env.BCRYPT_SALT_ROUNDS,
        reset_pass_token_expires_in: process.env.RESET_PASS_TOKEN_EXPIRES_IN
    },
    open_router_api_key: process.env.OPEN_ROUTER_API_KEY,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY,
    email_sender: {
        email: process.env.EMAIL_SENDER_EMAIL,
        app_pass: process.env.EMAIL_APP_PASS
    }
};
//# sourceMappingURL=index.js.map