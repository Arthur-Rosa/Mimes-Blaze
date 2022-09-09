import React, { useState } from "react";
import Block from "./Block";
import "./style.css";

const Home = () => {
  const [mult, setMult] = useState("");
  const handleCallback = (childData) => {
    setMult(childData);
  };

  const handleGameOver = () => {
    setPartida(false);
    setMult(0);
    setAposta(0);
    alert("explodiu");
  };

  const [saldo, setSaldo] = useState(10.0);
  const [aposta, setAposta] = useState(0);
  const [partida, setPartida] = useState(false);
  var blocks = [];

  if (blocks.length === 0) {
    for (var i = 0; i < 16; i++) {
      blocks[i] = {
        id: i,
      };
    }
  }
  // console.log(blocks);
  const inicarJogo = (e) => {
    if (aposta > saldo || partida || aposta == 0) {
      return;
    } else {
      setSaldo(saldo - aposta);
      setPartida(true);
    }
  };

  const retirarMoney = (e) => {
    setSaldo(saldo + aposta * mult);
    setPartida(false);
    setMult(0);
  };
  return (
    <div className="container">
      <div className="valores">
        <h3>Saldo R$ {saldo}</h3>
        <div className="input-value" name="aposta" id="aposta">
          <hr />
          <h2>Digite o Valor da Aposta</h2>
          <input
            type="number"
            placeholder="Digite o valor"
            onChange={(e) => setAposta(e.target.valueAsNumber)}
          />
          <br />
          {aposta > saldo ? (
            <span style={{ color: "red" }}>Valor maior que o Saldo</span>
          ) : (
            <></>
          )}
          <button className="jogar" type="btn" onClick={(e) => inicarJogo(e)}>
            Jogar
          </button>
          <br />
          {mult > 1 ? (
            <>
              <span>Multiplicador {mult}X</span>
              <br />
              <button className="jogar" onClick={(e) => retirarMoney(e)}>
                Retirar R${aposta * mult}
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="jogo">
        {partida === true ? (
          blocks.map((block) => {
            return (
              <Block
                gameOptions={handleGameOver}
                parentCallback={handleCallback}
                key={block.id}
                data={block}
              />
            );
          })
        ) : (
          <span>Inicie o Jogo</span>
        )}
      </div>
    </div>
  );
};

export default Home;
