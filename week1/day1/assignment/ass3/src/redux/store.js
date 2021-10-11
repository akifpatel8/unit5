import { reduceFn } from "./reduce"
import {createStore} from "redux"



export const store=createStore(reduceFn,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())