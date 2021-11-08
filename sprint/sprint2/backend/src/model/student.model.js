const mongoose=require("mongoose")
Schema=mongoose.Schema
const studentSchema=new mongoose.Schema({
    roll_number:{type:Number, required:true},
    user:{type:Schema.Types.ObjectId,ref:'user'},
    batch:{type:String,required:true},    
},{
    versionKey:false
})

const Student =mongoose.model("student",studentSchema)
module.exports=Student