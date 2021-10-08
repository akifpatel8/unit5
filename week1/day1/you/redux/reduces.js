 import { ADD_COUNT,ADD_TODO,REMOVE_COUNT } from "./actionTypes.js"
 export const reducerFn=(state,{type,payload})=>{
    switch(type){
        case ADD_COUNT:return {
            ...state,counter:state.counter+payload
        }
        case REMOVE_COUNT:return {
            ...state,counter:state.counter-payload
        }
        case ADD_TODO:return{
            ...state,
            todo:[...state.todo,{...payload}]
        }
     default: return {...state}
    }
    
}