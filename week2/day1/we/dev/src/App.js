import './App.css';
import { Github } from './components/Github';
import {Timer} from "./components/Timer"
import {useReducer} from "react"

function reduce(state,{type,payload}){
  switch(type){
      case "ADD" : return  {...state,count:state.count+payload}
      case "SUB" : return {...state,count:state.count-payload}
      default : return{state}
  }
}


const intitialvalue={
  count:0,
}
function App() {
  const {state,dispatch}=useReducer(reduce,intitialvalue)
  return (
    <div className="App">
      <h3>count : {state.count}</h3>
      <button onClick={()=>dispatch({type:"ADD",payload:1})}>add</button>
      {/* <button onClick={()=>dispatch("ADD")}>sub</button> */}

     {/* <Timer/> */}
     {/* <Github/> */}
    </div>
  );
}

export default App;
