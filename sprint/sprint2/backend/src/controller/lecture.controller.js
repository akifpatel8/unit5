const express=require("express")

const Lecture=require("../model/lecture.model")

const router=express.Router()

const authenticate=require("../middleware/authenticate")

router.get("/",async(req,res)=>{
    const lectures=await Lecture.find().lean().exec()
    return res.status(200).send(lectures)
})

router.post("/",async(req,res)=>{
    const lectures=await Lecture.create(req.body)
    return res.status(200).send(lectures)
})
router.delete("/:id",async(req,res)=>{
     lectures=await Lecture.findByIdAndDelete(req.params.id) 
    return res.status(200).send(lectures)
})


module.exports=router