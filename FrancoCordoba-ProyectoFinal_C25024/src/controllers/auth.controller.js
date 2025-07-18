import authServices from "../services/auth.services.js";
const login = async (req, res) => {
    try {
        const userCred = req.body;
        const auth = await authServices.loginService(userCred)
        
        if (auth.loginOk === true) {
            res
                .status(201)
                .json(auth)
        } else {
            res
                .status(401)
                .json(auth)
        }
    } catch (error) {
        res
            .status(500)
            .json({ message: "internal server error", error: error.message })
    }
}

export default { login }
