import React, { useCallback, useState } from "react";
import {M, TodoItem } from "./TodoItem";
import { v4 as uuid } from 'uuid';

function TodoInput() {
  const [text, setText] = useState("");
  const [list,setList]=useState([])

  const handleTodo=()=>{
      setList([...list,{title:text,status:false,id:uuid()}])
  }
  const handleToggle=useCallback((id)=>{
    console.log(id);
  },[])

  const delay = (time) => {
    const start = Date.now();
    while (Date.now() - start < time) {
      continue;
    }
    return;
  };
  delay(300)
  return (
      
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />
      <button onClick={handleTodo}>Add</button>
      {list.map((e)=>(
          <div key={e.id}>
            <M data={e} handleToggle={handleToggle} />
          </div>
          
      ))}
    </div>
  );
}

export default TodoInput;
