import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    cloudinary:{
        api_secret:process.env.CLOUDINARY_API_SECRET as string,
        cloude_name:process.env.CLOUDINARY_CLOUD_NAME as string,
        api_key:process.env.CLOUDINARY_API_KEY as string
    },
    jwt_access_secret:process.env.JWT_ACCESS_SECRET as string,
    jwt_refresh_secret:process.env.JWT_REFRESH_SECRET as string
}