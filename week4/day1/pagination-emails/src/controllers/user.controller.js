const express=require("express")

const router=express.Router()
const User=require("../models/user.model")
const sendEmail=require("../utils/send-mail")


router.post("/",async(req,res)=>{
    try{
        const user=await User.create(req.body)

       await sendEmail({ to: user.email, // list of receivers
       subject: `Welcome to Masai System ${user.first_name}`, // Subject line
       text: `Hi ${user.first_name}, Please confirm your email address`, // plain text body
       html: "<h1>Verification Email</h1>", // html body
    })

    let arr=["akif@patel","sandeep@nilaji","anuj@sharma","anurag@kumar"]

    for(let i=0;i<arr.length;i++){
        await sendEmail({
            to:arr[i],
            subject:`${user.first_name} has registered with us`,
            text: `Please welcome ${user.first_name}`
        })
    }

        return res.status(201).json({user:user})
    }
    catch(err){
        return res.status(400).json({status:"failed",message:err})
    }
})

router.get("",async(req,res)=>{
    try{
        const page = +req.query.page || 1
        const size = +req.query.size || 10
        const offset = (page-1)*size

    const users=await User.find().skip(offset).limit(size).lean().exec()
    const totalPages=Math.ceil(await User.find().countDocuments()/size)
    return res.status(200).json({users:users,totalPages})
    }
    catch(err){
        return res.status(400).json({status:"failed",message:err.message})
    }
})

module.exports=router