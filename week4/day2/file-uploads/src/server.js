const express=require("express")
const connect=require("./configs/db")
const app=express()

app.listen(2345,async()=>{
    await connect()
    console.log("listening to port 2345");
})