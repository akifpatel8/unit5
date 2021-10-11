import {createStore,combineReducers,applyMiddleware} from "redux"
import 



const rootReducer=combineReducers({
    auth:authReducer,
    todos:todoReducer
})

export const store=createStore(
    rootReducer,
    applyMiddleware(middleware1,middleware2)
)