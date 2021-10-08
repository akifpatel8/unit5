import React from 'react'
import { increment } from '../redux/action'
import { decrement } from '../redux/action'
import {useDispatch,useSelector} from "react-redux"

function Calculator() {
const counter=useSelector((state)=>state.counter)
const dispatch = useDispatch()
    return (
        <div>
            <h1>Increament & Decrement</h1>
            <h3>Value : {counter}</h3>
            <button onClick={()=>{dispatch(increment(1))}}>Increment</button>
            <button onClick={()=>{dispatch(decrement(1))}}>Decrement</button>
        </div>
    )
}

export default Calculator
