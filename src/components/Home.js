import React, { useState } from "react";
import Block from "./Block";
import "./style.css";

const Home = () => {
  const [mult, setMult] = useState("");
  const handleCallback = (childData) => {
    setMult(childData);
  };

  const [isExplod, setIsExplod] = useState(false);
  const handleGameOver = () => {
    setPartida(false);
    setMult(0);
    setAposta(0);
    setIsExplod(true);
  };

  console.log(mult);

  const [saldo, setSaldo] = useState(10.0);
  const [aposta, setAposta] = useState(0);
  const [partida, setPartida] = useState(false);
  var blocks = [];

  if (blocks.length === 0) {
    for (var i = 0; i < 25; i++) {
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
          <label className="label-form">Quantia R$</label>
          <div className="form">
            <input
              type="number"
              placeholder="Digite o valor"
              value={isExplod ? aposta : aposta}
              onChange={(e) => setAposta(e.target.valueAsNumber)}
            />
            <button className="MiniButton">½</button>
            <button className="MiniButton">X2</button>
          </div>
          <br />
          {aposta > saldo ? (
            <span style={{ color: "red" }}>Valor maior que o Saldo</span>
          ) : (
            <></>
          )}
          <button className="jogar" type="btn" onClick={(e) => inicarJogo(e)}>
            Começar o jogo
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
        {partida === true
          ? blocks.map((block) => {
              return (
                <Block
                  gameOptions={handleGameOver}
                  parentCallback={handleCallback}
                  key={block.id}
                  data={block}
                  clique={true}
                />
              );
            })
          : blocks.map((block) => {
              return <Block clique={false} />;
            })}
      </div>
    </div>
  );
};

export default Home;
