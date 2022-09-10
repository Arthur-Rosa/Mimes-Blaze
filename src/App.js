import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {

  const [saldo, setSaldo] = useState(0);

  const getSaldoHeaderToApp = (childData) => {
    setSaldo(childData);
  };

  return (
    <>
      <Header saldo={saldo} />
      <div className="App">
        <Home setSaldoHeaderToApp={getSaldoHeaderToApp} />
      </div>
    </>
  );
}

export default App;
