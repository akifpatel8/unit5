const mongoose=require("mongoose")
Schema=mongoose.Schema
const lectureSchema=new mongoose.Schema({
    title:{type:String, required:true},
    instructor:{type:Schema.Types.ObjectId,ref:'user'},
    batch:{type:String,required:true},    
},{
    versionKey:false
})

const Student =mongoose.model("student",studentSchema)
module.exports=Student