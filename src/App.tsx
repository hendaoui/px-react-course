import React from "react";
import "./App.css";
import PokemonList from "./views/PokemonList";

function App() {
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt=""
        className="logo"
      />
      <PokemonList />
    </div>
  );
}

export default App;
