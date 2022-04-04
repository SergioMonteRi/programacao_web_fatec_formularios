import axios from "axios";
import React, { useState } from "react";
import { CliFormContainer, ClienteContainer } from "./Cliente.Style";

export const Cliente = () => {
  //  const [cep, useState]  = useState('');
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = () => {
    try {
      axios.get(`https://viacep.com.br/ws/${cep}/json`).then((res) => {
        setRua(res.data.logradouro);
        setCidade(res.data.localidade);
        setEstado(res.data.uf);
      });
    } catch (error) {}
  };

  const handleChangeCEP = (event) => {
    setCep(event.target.value);
  };

  return (
    <ClienteContainer>
      <CliFormContainer>
        <div className="title">Cadastro de Cliente</div>

        <form className="form">
          <div className="blocos">
            <div className="bloco-esquerda">
              <input placeholder="Código"></input>
              <hr></hr>
              <input placeholder="Nome"></input>
              <hr></hr>
              <input placeholder="E-mail"></input>
              <hr></hr>
              <input placeholder="Telefone"></input>
              <hr></hr>
              <div className="input-cliente">
                <input type="checkbox"></input>
                <h1>Cliente ativo?</h1>
              </div>
            </div>
            <div className="espacamento-inputs"></div>
            <div className="bloco-direita">
              <input
                type="text"
                name="cep"
                id="cep"
                placeholder="CEP"
                onChange={handleChangeCEP}
                onBlur={handleSubmit}
              ></input>
              <hr></hr>
              <input placeholder="Endereço" value={rua}></input>
              <hr></hr>
              <input placeholder="Número"></input>
              <hr></hr>
              <input placeholder="Cidade" value={cidade}></input>
              <hr></hr>
              <input placeholder="Estado" value={estado}></input>
              <hr></hr>
            </div>
          </div>
          <div className="btn-cadastrar">
            <button onClick={handleSubmit} type="submit">
              Cadastar
            </button>
          </div>
        </form>
      </CliFormContainer>
    </ClienteContainer>
  );
};
