import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Card.css";
import ListPokemon from "./pages/ListPokemon";

function App() {
  return (
    <div className='my-4'>
      <div>
        <ListPokemon />
      </div>
    </div>
  );
}

export default App;
