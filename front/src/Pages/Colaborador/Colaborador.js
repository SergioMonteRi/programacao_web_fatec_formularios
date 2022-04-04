import React from "react";
import { ProdFormContainer, ProdutoContainer } from "./Colaborador.Style";

export const Colaborador = () => {
  return (
    <ProdutoContainer>
      <ProdFormContainer>
        <div className="title">Cadastro de Colaborador</div>
        <div className="form">
          <form>
            <input placeholder="Código"></input>
            <hr></hr>
            <input placeholder="Nome"></input>
            <hr></hr>
            <input placeholder="Cargo"></input>
            <hr></hr>
            <input placeholder="E-mail"></input>
            <hr></hr>
            <input placeholder="Observação"></input>
            <hr></hr>
            <div className="input-preco">
              <input type="checkbox"></input>
              <h1>Colaborador ativo?</h1>
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
