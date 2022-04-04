import React from "react";
import { ProdFormContainer, ProdutoContainer } from "./Pedido.Styles";

export const Pedido = () => {
  return (
    <ProdutoContainer>
      <ProdFormContainer>
        <div className="title">Cadastro de Pedido</div>
        <div className="form">
          <form>
            <input placeholder="Código"></input>
            <hr></hr>
            <input placeholder="Cliente"></input>
            <hr></hr>
            <input placeholder="Vendedor"></input>
            <hr></hr>
            <input placeholder="Produto"></input>
            <hr></hr>
            <div className="input-preco">
              <input type="checkbox"></input>
              <h1>Cargo ativo?</h1>
            </div>
            <div className="btn-cadastrar">
              <button>Cadastar</button>
            </div>
          </form>
        </div>
      </ProdFormContainer>
    </ProdutoContainer>
  );
};
