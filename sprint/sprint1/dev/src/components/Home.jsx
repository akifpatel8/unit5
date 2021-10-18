import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
   
  return (
    <div>
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/login">
          <button className="btn1">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn2">signup</button>
        </Link>
      </div>
      
    </div>
  );
}

export { Home };
