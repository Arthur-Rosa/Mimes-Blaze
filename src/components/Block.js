import React, { useEffect, useState } from "react";
import { SketchLogo } from "phosphor-react"
import { FaBomb} from "react-icons/fa"
import "./block.css";

import Diamond from "../audio/1.mp3";
import {Howl, Howler} from "howler";

const Block = ({ data, parentCallback, gameOptions, clique, mult }) => {

  var sound = new Howl({
    src: Diamond
  });
  

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
        sound.play();
        e.target.className = "block diamond";
        setNameClass("block diamond");
        mult = mult * 1.25;
        onTrigger(mult);
      }
    }
  }

  return (
    <div className="block" id={data} onClick={clique ? isBombOrNo : ""}>
      <div className="content">
        {nameClass === "block diamond" ? (
          <span className="diamond-logo"><SketchLogo size={100} /></span>
        ) : (
          <></>
        )}
        {nameSubClass === "block bomb" ? (
          <span className="bomb-logo" style={{ fontSize: "85px", color: "red" }}><FaBomb /></span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Block;
