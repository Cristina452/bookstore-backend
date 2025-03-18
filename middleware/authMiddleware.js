const { verifyToken } = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(400).json({ message: 'Invalid token' });
    }

    req.user = decoded; // Salva l'utente decodificato nella richiesta
    next();
};

module.exports = authMiddleware;
