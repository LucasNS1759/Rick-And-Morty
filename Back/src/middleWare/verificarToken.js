const jwt = require('jsonwebtoken');
const {User} = require("../Database/DB_connection")

const validateJWT = async (req, res, next) => {
    const token = req.header('x-token');
    if ( !token ) {
        return res.status(401).json({
            msg: 'no token requested, access is only allowed with token'
        })
    }
   // console.log(token);
   try {
        const {userId} = jwt.verify(token, process.env.SECRET_KEY )
        
        // read the user that matches uid
        const user = await User.findByPk(userId);

        if ( !user ) {
            return res.status(401).json({
                msg: 'Invalid token, user does not exist in DB'
            })
        }

  
//    console.log(req.user);
        
        req.user = userId;
        
        //console.log(payload);
        next();
   } catch (error) {
        res.status(401).json({
            error: error.message,
            msg: 'Invalid token'
        })
   }
    
}   

module.exports = {validateJWT};