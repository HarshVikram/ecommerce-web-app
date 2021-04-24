const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

const db = require('../database/db');

// to protect routes that require authentication
module.exports = async (req, res, next) => {
    if (req.method == 'OPTIONS') {
        return next();
    }
    try {
        // console.log('[is-auth] req.headers: ', req.headers);
        const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
        if (!token) {
             return res.status(401).json({ msg: 'No token, authorization denied' });
        }

        const decodedToken = jwt.verify(token, config.JWTSECRET);
        if (!decodedToken) {
            return res.status(401).json({ msg: 'Token is not valid' });
        }

        // req.userId = decodedToken.id;

        // put user into req.user after login
        // maybe we can put it in global variable (req.local.user) after login
        const user = await db.User.findOne({ where: { id: decodedToken.id } });
        req.user = user;
        next();
    } catch (err) {
        console.error('something wrong with auth middleware');
    	res.status(500).json({ msg: 'Server Error' });
    }
};