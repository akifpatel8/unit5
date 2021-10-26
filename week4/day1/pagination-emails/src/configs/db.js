const mongoose=require("mongoose")
require("dotenv").config()


const connect=()=>{
    const dbUrl=process.env.NODE_ENV === "development"?"mongodb://127.0.0.1:27017/pagination":"";
    return mongoose.connect(dbUrl)
}

module.exports=connect