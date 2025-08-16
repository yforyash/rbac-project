const roles = require('../config/roles'); 
// roles get in array
// proper roles name required from previous middleware
// role name check in roles arrya
// once veryfy forward it to next function for controller
const checkRole=(role,action)=>{
    return(req,res,next)=>{
        const userRole=req.user.role;
        const permissions=roles[userRole].can;
        if(permissions.includes(action)){
            next();
        }
        else {
            res.status(403).json({message:"Access Denied"});
        }
        };
    };
module.exports=checkRole;