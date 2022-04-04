import React from "react";
import { ProdFormContainer, ProdutoContainer } from "./Produto.Style";

export const Produto = () => {
  return (
    <ProdutoContainer>
      <ProdFormContainer>
        <div className="title">Cadastro de Produto</div>
        <div className="form">
          <form>
            <input placeholder="Código"></input>
            <hr></hr>
            <input placeholder="Nome"></input>
            <hr></hr>
            <input placeholder="Descrição"></input>
            <hr></hr>
            <input placeholder="EAN"></input>
            <hr></hr>
            <input placeholder="Categoria"></input>
            <hr></hr>
            <input placeholder="Preço R$"></input>
            <hr></hr>
            <div className="input-preco">
              <input type="checkbox"></input>
              <h1>Produto ativo?</h1>
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
