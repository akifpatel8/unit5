import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Categories } from './Categories'
import "../App.css";

function LoginInput() {
    const [name,setName]=useState("")
    const [flag,setFlag]=useState(false)
    const handleLogin= async()=>{
        const data=await axios.get(`http://localhost:3002/user?q=${name}`)
        if(data.data[0].user.name === name){
            console.log(data);
            setFlag(true)
        }
    }
   
    return (
        <div>
        { flag ?<Link to="/login/categories"><h1>View Categories</h1></Link>:
            <div>
                <input className="inp" onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter your name" /><br />
                <input className="inp" type="password" placeholder="Enter your password" /><br />
                <button className="btn2" onClick={handleLogin}>Submit</button>
            </div>
       }
</div>
)
}

export {LoginInput}
