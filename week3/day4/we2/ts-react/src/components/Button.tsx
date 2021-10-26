import React from "react";


interface ButtonProps{
    label:"",
    onClick:()=>{},
    color?:"red"|"blue"|"green"
}

export const Button = ({ label="",color="red" }:ButtonProps) => {
  return (
    <button style={{backgroundColor:color}} data-testid="button">
      {label}
    </button>
  );
  }