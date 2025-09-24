import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) return res.status(401).json({error: "Access Denied"});

    try{
        const decode = jwt.verify(token, JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(400).json({error: "Invalid Token"});
    }
}