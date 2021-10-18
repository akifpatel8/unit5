import React, { useState } from 'react'
import {useDispatch,useSelector, useStore} from "react-redux"
import axios from "axios"
import {signupSuccess} from "../redux/signup/action"
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
                <input onChange={(e)=>{handleChange(e)}} name="name" type="text" placeholder="enter your name" /><br />
                <input onChange={(e)=>{handleChange(e)}} name="age" type="number" placeholder="enter your age" /><br />
                <input onChange={(e)=>{handleChange(e)}} name="location" type="text" placeholder="enter your location" /><br />
                <input onChange={(e)=>{handleChange(e)}} name="interest" type="text" placeholder="enter your Interest" /><br />
                <input onChange={(e)=>{handleChange(e)}} name="password" onChange={(e)=>{handleChange(e)}} type="password" placeholder="enter your password" /><br />
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}

export {SignupInput}
