import React, { useState } from 'react'
import {useDispatch,useSelector, useStore} from "react-redux"
import axios from "axios"
import {signupSuccess} from "../redux/signup/action"
import "../App.css";

function SignupInput() {
    const {isLoading,iserror,data}=useSelector((store)=>store)
    const dispatch=useDispatch()
    const [formdata,setFormData]=useState({})
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formdata,[name]:value})
        
    }
   
    const handleClick=async()=>{
       const res= await axios.post("http://localhost:3002/user",{user:formdata})
       dispatch(signupSuccess(res.data.user))
     }
    
    return (
        <div>
            <div>
                <input className="inp" onChange={(e)=>{handleChange(e)}} name="name" type="text" placeholder="Enter your name" /><br />
                <input className="inp" onChange={(e)=>{handleChange(e)}} name="age" type="number" placeholder="Enter your age" /><br />
                <input className="inp" onChange={(e)=>{handleChange(e)}} name="location" type="text" placeholder="Enter your location" /><br />
                <input className="inp" onChange={(e)=>{handleChange(e)}} name="interest" type="text" placeholder="Enter your Interest" /><br />
                <input className="inp" onChange={(e)=>{handleChange(e)}} name="password" onChange={(e)=>{handleChange(e)}} type="Password" placeholder="enter your password" /><br />
                <button className="btn2" onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}

export {SignupInput}
