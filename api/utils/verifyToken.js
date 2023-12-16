const jwt = require("jsonwebtoken");
const createError = require("./../utils/error");

exports.verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token) {
        return next(new createError("You are not authenticated!", 401));
    }
    
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(new createError("Token is not valid", 403));
        req.user = user;
        next();
    });
};


exports.verifyUser = (req,res,next) => {
    this.verifyToken(req,res,next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }
        else {
            return next(new createError("you are not auhtorized",403))
        }
    })
}

exports.verifyAdmin = (req,res,next) => {
    this.verifyToken(req, res, next, () => {
        if(req.user.isAdmin){
            next()
        }
        else {
            return next(new createError("you are not auhtorized",403))
        }
    })
}