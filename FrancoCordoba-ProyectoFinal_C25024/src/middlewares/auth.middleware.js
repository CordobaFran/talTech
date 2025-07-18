import { verifyToken } from "../utils/jwt.js";

export const authentication = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1]
        if (!token)
            return res
                .sendStatus(401);
    
        const verifyResult = verifyToken(token)
    
        if (!verifyResult.valid)
            return res.sendStatus(403)
        req.user = verifyResult.decoded
    
        next()
    } catch (error) {
        console.log(error.message);
        res
        .status(500)
        .json({message: "authorization headers issue"})
    }
}