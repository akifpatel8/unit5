const User=require("../model/user.model")
const jwt =require('jsonwebtoken')
require("dotenv").config()

const newToken=(user)=>{
    return jwt.sign({user:user},
    process.env.JWT_SECRET_KEY)
}
const register=async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email}).lean().exec()
        if(user){
            return res.status(400).json({status:"error",message:"user already exists"})
        }
        user=await User.create(req.body)
        const token =newToken(user)
        return res.status(201).json({user:user,token:token})
    }
    catch(err){
        return res.status(500).json({err})
    }
}

const login=async(req,res)=>{
    try{
        let user = await User.findOne({email:res.body.email}).exec()
        if(!user){
            return res.status(400).json({status:"error",message:"user does not exists"})
        }
        const match=user.checkPassword(req.body.password)
        if(!match){
            return res.status(400).json({status:"error",message:"password not matched"})
        }
        const token=newToken(user)
        return res.status(200).json({user:user,token:token})
    }
    catch(err){
         return res.status(500).json(err)
    }
    
}

module.exports={register,login}