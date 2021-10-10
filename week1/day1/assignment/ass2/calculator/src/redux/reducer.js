import { Add,Sub,Mul,Div } from "./actionType";

export const reduceFn=(state,{type,payload})=>{
    // console.log(typeof(payload));
    switch(type){
        case Add:return{
            ...state,count:state.count+(payload)
        }
        case Sub:return{
            ...state,count:state.count-payload
        }
        case Mul:return{
            ...state,count:state.count*payload
        }
        case Div:return{
            ...state,count:state.count/payload
        }
        default :return{...state}
    }
}