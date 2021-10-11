import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/action";
import styled from "styled-components";

const Card = styled.div`
  max-width: 300px;
  padding: 20px;
  border: 1px solid black;
  margin: 20px auto;
  border-radius: 5px;
  background-color: lightgray;
  & button {
    margin: 10px;
    padding: 5px 10px;
  }
`;
const Inp = styled.div`
  & input{
    padding: 5px 10px;
    margin: 5px;
  }
  & button{
    padding: 5px 10px;
  }
`;

function Todo() {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  const todo = useSelector((state) => state.todo);
  // console.log(todo);
  const dispatch = useDispatch();
  return (
    <div>
      <Inp>
        <h1>Todo App</h1>
        <input
          onChange={(e) => {
            handleText(e);
          }}
          type="text"
          placeholder="enter todo"
        />
        <button
          onClick={() => {
            dispatch(addTodo(text));
          }}
        >
          Add
        </button>
      </Inp>
      {todo.map((item) => (
        <Card key={item.id}>
          <h3>{item.title}</h3>
          <button
            onClick={() => {
              dispatch(toggleTodo(item));
            }}
          >
            {item.status ? "Done" : "Not Done"}
          </button>
          <button
            onClick={() => {
              dispatch(deleteTodo(item));
            }}
          >
            delete
          </button>
        </Card>
      ))}
    </div>
  );
}

export default Todo;
