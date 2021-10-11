import { AddTodo,ToggleTodo,DeleteTodo } from "./actionType";
import { nanoid } from 'nanoid'


export const addTodo=(data)=>{
    return {type:AddTodo,payload:{status:false,title:data,id:nanoid()}}
}

export const toggleTodo=(data)=>{
    return {type:ToggleTodo,payload:data}
}

export const deleteTodo=(data)=>{
    return {type:DeleteTodo,payload:data}
}