import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authMiddleware = (req, res, next) => {
    // Get token from the request header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    // Verify the token
    jwt.verify(token, process.env.JWT_KEY, (err, decodedToken) => {
        if (err) return res.sendStatus(403);
        req.user = decodedToken.user; // Assuming user is present in the decoded token
        next();
    });
};

export default authMiddleware;
