import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add, div, mul, sub } from "../redux/action";

function Calculate() {
  const [val, setVal] = useState(0);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleChange=(e)=>{
      console.log(e.target.value);
    setVal(+e.target.value)
  }
  const handleAlert=()=>{
    alert("You cannot divide by 0")
  }
  console.log(typeof(val));
  return (
    <div>
      <h1>Calculator</h1>
      <h3>Value : {count}</h3>
      <input
        onChange={(e) => {
         handleChange(e)
        }}
        type="number"
        placeholder="enter the value"
      />
      <br />
      <button onClick={()=>{dispatch(add(val))}}>Add</button>
      <button onClick={()=>{dispatch(sub(val))}}>Sub</button>
      <button onClick={()=>{dispatch(mul(val))}}>Mul</button>
      <button onClick={val==0?()=>{handleAlert()} :()=>{dispatch(div(val))}}>Div</button>

    </div>
  );
}

export default Calculate;
