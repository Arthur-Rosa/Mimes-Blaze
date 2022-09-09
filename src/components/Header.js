import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="Container">
      <div className="Logo">
        <img />
      </div>
      <div className="buttons">
        <div className="saldo">
          <div class="atual">
            <span class="symbol">R$</span>0.00
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
