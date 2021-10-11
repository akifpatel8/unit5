import { AddTodo,DeleteTodo,ToggleTodo } from "./actionType";

const initialState={
    todo:[]
}

export const reduceFn=(state=initialState,{type,payload})=>{
    // console.log(payload.id);
    // console.log(state);
    switch(type){
        case AddTodo:return{
            ...state,todo:[...state.todo,{...payload}]
        }


        case DeleteTodo:
            let array=[...state.todo]
            // console.log(payload.id);

           array= array.filter((item)=> item.id !== payload.id)
            console.log(array);
            return{
               todo:[...array]
        }




        case ToggleTodo:
            let arr=[...state.todo]
            let e=arr.find((item)=>item.id===payload.id)
            e.status=!e.status

            return{
                todo:[...arr]
        }
        default:return{...state}
    }
}