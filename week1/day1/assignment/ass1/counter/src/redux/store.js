import {createStore} from "redux"
import { reduceFn } from "./reducer"


const intialState={
    counter:0
}
export const store=createStore(reduceFn,intialState)