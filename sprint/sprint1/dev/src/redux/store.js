import {createStore} from "redux"
 import { reducer } from "./signup/reducer"

export const store=createStore(reducer)