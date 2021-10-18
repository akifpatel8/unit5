import React from 'react'
import {useState,useEffect} from "react"

function useTimer(ms) {
    const [show,setShow]=useState(false)
    useEffect(()=>{
        const id=setTimeout(()=>{
            setShow(true)
        },ms)
        return ()=>{
            console.log("clearing");
            clearTimeout(id)
        }
        return 
    },[])
}



function Timer(){
    const timer=useTimer(3000)

}

export {Timer}
