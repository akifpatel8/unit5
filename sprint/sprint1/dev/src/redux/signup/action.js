import { SignupError,SignupLoading,SignupSuccess } from "./actionType";


export const signupSuccess=(data)=>{
    return {
        type:SignupSuccess,
        payload:data
    }
}
export const signupError=(data)=>{
    return {
        type:SignupError
    }
}

export const signupLoading=(data)=>{
    return {
        type:SignupLoading
    }
}