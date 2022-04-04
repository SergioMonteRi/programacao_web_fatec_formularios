import React from "react";
import { SideBarContainer } from "./SideBar.Styles";

import homeIcon from "../../Assets/Images/home_icon.svg";
import cargoIcon from "../../Assets/Images/cargo_icon.svg";
import produtoIcon from "../../Assets/Images/produto_icon.svg";
import clienteIcon from "../../Assets/Images/cliente_icon.svg";
import colaboradorIcon from "../../Assets/Images/colaborador_icon.svg";
import pedidoIcon from "../../Assets/Images/pedido_icon.svg";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <SideBarContainer>
      <Link to="/about">
        <div className="config-icon">
          <img src={homeIcon} alt="home icon" className="home-icon"></img>
        </div>
      </Link>

      <Link to="/produto">
        <div className="config-icon">
          <img src={produtoIcon} alt="home icon" className="option-icon"></img>
        </div>
      </Link>

      <Link to="/cliente">
        <div className="config-icon">
          <img src={clienteIcon} alt="home icon" className="option-icon"></img>
        </div>
      </Link>

      <Link to="/colaborador">
        <div className="config-icon">
          <img
            src={colaboradorIcon}
            alt="home icon"
            className="option-icon"
          ></img>
        </div>
      </Link>

      <Link to="/cargo">
        <div className="config-icon">
          <img src={cargoIcon} alt="home icon" className="option-icon"></img>
        </div>
      </Link>
      
      <Link to="/pedido">
        <div className="config-icon">
          <img src={pedidoIcon} alt="home icon" className="option-icon"></img>
        </div>
      </Link>

    </SideBarContainer>
  );
};
