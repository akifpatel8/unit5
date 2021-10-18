import React from 'react'
import {Link} from "react-router-dom"
function Home() {
    return (
        <div>
           <Link to="/"><h1>Home</h1></Link> 
           <Link to="/login"><button>Login</button></Link>
           <Link to="/signup"><button>signup</button></Link>            
        </div>
    )
}

export {Home}
