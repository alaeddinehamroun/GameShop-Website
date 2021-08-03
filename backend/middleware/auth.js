const jwt = require('jsonwebtoken')
module.exports = function (req, res, next) {
    // Get token from header 
    const token = req.header('x-auth-token');

    // Check if no token
    if (!token) {
        return res.status(401).json({
            msg: 'No token, auth denied'
        })
    }

    // Verify token 
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // set user id in req.user
        req.user = decoded.user;
        console.log(req.user.id+"middleware")
        next()
    } catch (error) {
        res.status(401).json({
            msg: 'Token is not valid'
        })
    }
}