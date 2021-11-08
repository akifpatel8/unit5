const express=require("express")
const connect = require("./config/db")
const app =express()
const {login,register}=require("./controller/user.controller")
app.use(express.json())

app.post("/user",register)
app.post("/login",login)

app.listen(2345,async()=>{
    await connect()
    console.log("listing to port 2345");
})