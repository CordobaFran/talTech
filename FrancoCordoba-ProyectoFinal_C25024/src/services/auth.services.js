import { envs } from "../config/envs.js"
import { generateToken } from "../utils/jwt.js";

const adminUser = {
    id: envs.adminUser.id,
    email: envs.adminUser.email,
    password: envs.adminUser.password
};

const loginService = async (userCred) => {
    try {
        const { email, password } = userCred;

        if (email === adminUser.email && password === adminUser.password) {
            const token = generateToken(adminUser)
            console.log(token);
            return {token: token, loginOk: true}
        };
        return {message: "invalid email or password", loginOk: false}

    } catch (error) {
        console.log(error.message);
    }

}

export default { loginService }