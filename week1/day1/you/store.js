import { createStore } from "redux"
import { reducerFn } from "./redux/reduces.js";
import { addCount,addTodo } from "./redux/action.js";

const initalState={
    counter:0,
    todo:[]
}

const  store = createStore(reducerFn,initalState)


console.log(store.getState());
store.dispatch(addCount(1))
store.dispatch(addCount(2))
console.log(store.getState());
store.dispatch(addTodo({id:1,status:false,title:"Learn React"}))
console.log(store.getState());




// class Store{

//     constructor(reducerFn,initalState){
//         this.reducer=reducerFn;
//         this.state=initalState;
//     }

//     getState(){
//         return this.state;
//     }

//     dispatch(action){
//         this.state=this.reducer(this.state,action)
//     }

// }'