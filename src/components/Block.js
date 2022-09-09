import React, { useEffect, useState } from "react";
import "./block.css";

var mult = 1;

const Block = ({ data, parentCallback, gameOptions, clique }) => {
  const onTrigger = (event) => {
    parentCallback(event);
    event.preventDefault();
  };

  const onGameOver = (event) => {
    gameOptions();
    event.preventDefault();
  };

  const [nameClass, setNameClass] = useState("");
  const [nameSubClass, setNameSubClass] = useState("");

  var armazem = [];

  armazem[data] = false;
  if (
    Math.floor(Math.random() * 8) == 2 ||
    Math.floor(Math.random() * 8) == 4
  ) {
    armazem[data] = true;
  }
  // console.log(armazem);
  function isBombOrNo(e) {
    // console.log(data);
    // console.log(armazem);
    for (let key in armazem) {
      if (armazem[key]) {
        e.target.className = "block bomb";
        setNameSubClass("block bomb");
        mult = 1;
        onGameOver();
      } else {
        e.target.className = "block diamond";
        setNameClass("block diamond");
        mult = mult * 1.5;
        onTrigger(mult);
      }
    }
  }

  return (
    <div className="block" id={data} onClick={clique ? isBombOrNo : ""}>
      <div className="content">
        {nameClass === "block diamond" ? (
          <span style={{ color: "white" }}>Dima</span>
        ) : (
          <></>
        )}
        {nameSubClass === "block bomb" ? (
          <span style={{ color: "red" }}>bomb</span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Block;
