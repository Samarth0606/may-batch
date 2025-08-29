
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');


function verifyToken(req,res,next){
    if(
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === 'JWT'
    ){
        jwt.verify(
            req.headers.authorization.split(" ")[1], 
            'secretkey', 
            async function(err, verifiedToken) {
                if(err){
                    return res.status(403).json({message: "Invalid JWT TOKEN"})
                }
                let user = await UserModel.findById(verifiedToken.id);
                req.user = user;
                // console.log(user , "user");
                // console.log(req , "req");
                next();   
            }
        );
    }
    else{
        return res.status(404).json({message: "Token was not found"})
    }
}

module.exports = verifyToken;




