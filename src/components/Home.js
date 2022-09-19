import React, { useState } from "react";
import Block from "./Block";
import "./style.css";

const Home = ({ setSaldoHeaderToApp }) => {
  const [mult, setMult] = useState(1);
  const handleCallback = (childData) => {
    setMult(childData);
  };

  const setSaldoHeader = (childData) => {
    setSaldoHeaderToApp(childData);
  };


  const [isExplod, setIsExplod] = useState(false);
  const handleGameOver = () => {
    setPartida(false);
    setMult(1);
    setAposta(0);
    setApostaInput(0)
    setIsExplod(true);
  };

  console.log(mult);

  const [saldo, setSaldo] = useState(10.0);
  setSaldoHeader(saldo)
  const [aposta, setAposta] = useState(0);
  const [apostaInput, setApostaInput] = useState(0)
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
    if (apostaInput > saldo || partida || apostaInput == 0) {
      return;
    } else {
      setAposta(apostaInput)
      setSaldo(saldo - apostaInput)
      setPartida(true);
      
      setApostaInput(0);
    }
  };

  const retirarMoney = (e) => {
    setSaldo(saldo + aposta * mult);
    setSaldoHeader(saldo + aposta * mult)
    setPartida(false);
    setMult(1);
  };

  const dividirAposta = (e) => {
    setApostaInput(aposta / 2)
  }

  const multiplicarAposta = (e) => {
    setApostaInput(aposta * 2)
  }

  return (
    <div className="container">
      <div className="valores">
        {/* <h3 style={{ color: "white" }}>Saldo R$ {saldo.toFixed(2)}</h3> */}
        <div className="input-value" name="aposta" id="aposta"> 
          <h4 className="label-form">Desenvolvido by <a class="arth" href="https://www.linkedin.com/in/arthur-rosa-a2805b208/" target="_blank">Arthur</a> ❤️</h4>
          <br />
          <label className="label-form">Quantia R$</label>
          <div className="form">
            <input
              type="number"
              placeholder="Digite o valor"
              value={isExplod ? apostaInput : apostaInput}
              onChange={(e) => setApostaInput(e.target.valueAsNumber)}
            />
            <button className="MiniButton" onClick={(e) => dividirAposta(e)}>½</button>
            <button className="MiniButton" onClick={(e) => multiplicarAposta(e)}>X2</button>
          </div>
          <br />
          {saldo < apostaInput ? (
            <span style={{ color: "red" }}>Valor maior que o Saldo</span>
          ) : (
            <></>
          )}
          
          {partida ? (
            <>
                <button className="jogar" onClick={(e) => retirarMoney(e)}>
                  Retirar R${(aposta * mult).toFixed(2)}
                </button>
                <div className="multiplicador">
                <div className="multSpan">
                  <span style={{ color: "white" }}>Multiplicador {mult.toFixed(2)}X</span>
                </div>
              </div>

            </>
          ) : (
            <>
            <button className="jogar" type="btn" onClick={(e) => inicarJogo(e)}>
            Começar o jogo
          </button>
          </>
          )}
          <br />
          
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
                mult={mult}
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
