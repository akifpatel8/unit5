import { SignupError,SignupSuccess,SignupLoading } from "./actionType";


const initialState={
    isloading:false,
    iserror:false,
    data:[]
}

export const reducer=(state=initialState,{type,payload})=>{
 switch(type){
     case SignupError:return{
         ...state,isloading:false,iserror:true
     }
     case SignupSuccess:return{
         ...state,isLoading:false,data:payload
     }
     case SignupLoading:return{
         ...state,isloading:true
     }
    default : return {...state}
 }
}