import {useEffect,useState} from "react"

import React from 'react'

function useFetch(url){
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)
    const [data,setData]=useState([])
    fetch(url)
    .then((res)=>res.json)
    .then((r)=>{setLoading(false);setData(r)})
    .catch((err)=>{
        setLoading(false)
        setError(true)        
    })
    return {loading,data,error}

}


export function Github() {
    const {loading,error,data}=useFetch(`https://api.github.com/search/users?q=masai&per_page=3`)
    console.log(data);
    return (
        <div>
            {/* {loading?"Loading...":error?"something went wrong":{data}} */}
            hi
            
        </div>
    )
}

