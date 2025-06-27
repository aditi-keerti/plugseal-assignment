const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const verifyToken =(req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];
       if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });
       try{
            const decoded = jwt.verify(token , process.env.JWT_SECRET);
            req.user = decoded; //{id, role}
            next();
       }catch(err){
        return res.status(401).json({message:'Ivalid token'});
       }
}

module.exports= {verifyToken};
// This middleware checks if the user is authenticated by verifying the JWT token.