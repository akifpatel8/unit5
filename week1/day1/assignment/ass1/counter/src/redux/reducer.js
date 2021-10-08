import { Increment,Decrement } from "./actionType";

export const reduceFn=(state,{type,payload})=>{
    switch(type){
        case Increment:return{
            ...state,counter:state.counter+payload
        }
        case Decrement:return{
            ...state,counter:state.counter-payload
        }
        default:return {...state}
    }
}