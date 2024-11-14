import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // TODO: verify the token exists and add the user data to the request object
    const authCombine = req.headers.authorization;
    if (!authCombine) {
        res.status(401);
    }
    else {
        const token = authCombine.split(" ")[1];
        const sKey = process.env.JWT_SECRET_KEY || "";
        jwt.verify(token, sKey, (err, user) => {
            if (err) {
                return res.status(401).json({ message: "error" });
            }
            req.user = user;
            return next();
        });
    }
    res.status(401);
};
