import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt=""
          className="logo"
        />
      </Link>
      <Outlet />
    </div>
  );
}

export default App;
