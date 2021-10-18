import { SignupError,SignupSuccess,SignupLoading } from "./actionType";


const initialState={

}

export const reduce=(state=initialState,{type,payload})=>{
 switch(type){
     case SignupError:return{}
     case SignupSuccess:return{}
     case SignupLoading:return{}
    default : return state
 }
}