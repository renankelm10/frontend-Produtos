import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal, { contextType } from "react-modal";
import "./App.css";

function App() {
  

  return (
    <div className="App">
    <div className="BackgroundLogin">
      <h1>Gerenciador</h1>
      <input type="text"
      value={usuario}
      placeholder="Usuario"
      className="w-96 py-2 px-4 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      ></input>
      <input style={{marginTop:"10px"}} type="text"
      value={senhausuario}
      placeholder="Senha"
      className="w-96 py-2 px-4 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      ></input>
      <a href=""> Recuperar Senha</a>
    </div>
  </div>
  );
}

export default App;
