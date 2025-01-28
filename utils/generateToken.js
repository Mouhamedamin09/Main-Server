// utils/generateToken.js
require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (userId, email) => {
    return jwt.sign(
        { userId, email },
        'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2', // Use environment variable
        { expiresIn: '1h' } // Token expires in 1 hour
    );
};

module.exports = generateToken;
