import styled from "styled-components";

export const ClienteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 80%;
  margin-top: 4%;
`;

export const CliFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  background-color: #2b2929;
  width: 60%;
  border-radius: 10px;
  box-shadow: 0 0 1em #352d43;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    padding-bottom: 0px;
    font-size: 28px;
    color: #6b5def;
    margin-top: 2%;
    font-weight: bold;
  }

  .form {
    padding: 40px;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .espacamento-inputs {
      width: 15%;
    }

    .blocos {
      display: flex;
      flex-direction: row;

      .bloco-direita {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 70%;
      }

      .bloco-esquerda {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 70%;

        .input-cliente {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          width: 100%;

          input {
            margin-right: 2%;
            width: 10%;
          }

          h1 {
            font-size: 19px;
            width: 100%;
            color: grey;
            font-weight: lighter;
          }
        }
      }
    }

    .btn-cadastrar {
      margin-top: 5%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        margin-top: 2%;
        padding: 12px;
        width: 50%;
        border-radius: 35px;
        border: none;
        background-color: #524aa6;
        font-weight: bold;
        color: white;
        font-size: 16px;
        cursor: pointer;

        :hover {
          border: solid 1px white;
        }
      }
    }

    input {
      width: 100%;
      padding: 10px;
      background-color: #2b2929;
      border: 0 none;
      outline: 0;
      font-size: 18px;
      color: white;
    }

    input:focus {
      width: 100%;
      padding: 10px;
      background-color: #2b2929;
      border: 0 none;
      outline: 0;
      font-size: 18px;
      color: white;
    }

    hr {
      margin-top: 0%;
      margin-bottom: 4%;
      border-color: #573185;
    }
  }
`;
