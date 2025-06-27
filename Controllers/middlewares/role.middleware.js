//middleware for checking the access for roles

const allowRoles = (...roles)=>(req,res,next)=> {
 if(!roles.includes(req.user.role)){
    return res.status(403).json({message:'Access denied. You do not have the required role.'});
 }
 next();
};
module.exports = {allowRoles};
// This middleware checks if the user has one of the allowed roles.