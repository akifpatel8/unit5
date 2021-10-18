import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
        { flag ?<Link to="/">hi</Link>:
            <div>
                <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter your name" /><br />
                <input type="password" placeholder="Enter your password" /><br />
                <button onClick={handleLogin}>Submit</button>
            </div>
       }
</div>
)
}

export {LoginInput}
