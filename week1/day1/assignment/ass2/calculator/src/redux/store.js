import React from 'react'
import { createStore } from 'redux'
import {reduceFn} from "./reducer"



const initialState={
    count:0
}
export const store=createStore(reduceFn,initialState)


