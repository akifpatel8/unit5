const mongoose=require("mongoose")
Schema=mongoose.Schema

const lectureSchema=new mongoose.Schema({
    title:{type:String, required:true},
    book:{type:String, required:true},
    batch:{type:String,required:true},    
},{
    versionKey:false
})

const lecture = mongoose.model("lecture",lectureSchema)
module.exports=lecture