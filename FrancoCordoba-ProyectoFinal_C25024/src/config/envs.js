import { config } from 'dotenv';
config();

export const envs = {
    firebase: {
        APIKEY: process.env.APIKEY,
        AUTHDOMAIN: process.env.AUTHDOMAIN,
        PROJECTID: process.env.PROJECTID,
        STORAGEBUCKET: process.env.STORAGEBUCKET,
        MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
        APPID: process.env.APPID
    },
    secret: {
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY
    },
    adminUser: {
        id: process.env.ADMIN_ID,
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASS
    }

};