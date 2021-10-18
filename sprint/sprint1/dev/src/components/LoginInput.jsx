import axios from 'axios'
import React, { useEffect, useState } from 'react'

function LoginInput() {
    const [name,setName]=useState("")

    const handleLogin= async()=>{
        const data=await axios.get(`http://localhost:3002/user/?q=${name}`)
        console.log(data.data);
    }
   
    return (
        <div>
            <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter your name" /><br />
            <input type="password" placeholder="Enter your password" /><br />
            <button onClick={handleLogin}>Submit</button>
        </div>
    )
}

export {LoginInput}
