import React from "react";
import "./header.css";

const Header = ({ saldo }) => {

  return (
    <div className="Container">
      <div className="Logo">
        <img />
      </div>
      <div className="buttons">
        <div className="saldo">
          <div class="atual">
            <span class="symbol">R$</span>{saldo.toFixed(2)}
            <div style={{ marginLeft: "5px" }}>
              <img src="../images/BRL.svg" />
            </div>
          </div>
        </div>

        <div className="depositar">
          <button className="deposit-btn">Depositar</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
