require("dotenv").config()
const jwt=require("jsonwebtoken")

const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_SECRETKEY,function(err,user){
            return resolve(user)
        })
    })
}

const authenticate=async(req,res,next)=>{
    let bearerToken=req?.headers?.authorization
    if(!brearerToken){
        return res.status(401).json({status:"error",message:"you did not send auth header "})
    }
    if(!brearerToken.startsWith("bearer")){
        return res.status(401).json({status:"error",message:"you did not send auth header"})
    }
    const token=bearerToken.split(" ")[1]
    try{
        const user=await verifyToken(token)
        req.user=user.user
        return next()
    }
    catch(err){

    }
}

module.exports=authenticate