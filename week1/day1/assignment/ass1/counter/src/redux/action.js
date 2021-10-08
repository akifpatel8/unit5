import { Increment,Decrement } from "./actionType";

const increment=(data)=>{
    return {type:Increment,payload:data}
}

const decrement=(data)=>{
    return {type:Decrement,payload:data}
}

export {increment,decrement}