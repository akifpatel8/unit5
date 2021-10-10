import { Add,Sub,Mul,Div } from "./actionType";

export const add=(data)=>{
    return {type:Add,payload:data}
}
export const sub=(data)=>{
    return {type:Sub,payload:data}
}
export const mul=(data)=>{
    return {type:Mul,payload:data}
}
export const div=(data)=>{
    return {type:Div,payload:data}
}