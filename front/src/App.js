import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContainer } from "./App.Styles";

import { Global } from "./Styles/Global.Styles";
import { SideBar } from "./Components/SideBar/SideBar";

import HomePage from "./Pages/HomePage/HomePage";
import { Produto } from "./Pages/Produto/Produto";
import { Cliente } from "./Pages/Cliente/Cliente";
import { Colaborador } from "./Pages/Colaborador/Colaborador";
import { Cargo } from "./Pages/Cargo/Colaborador";
import { Pedido } from "./Pages/Pedido/Pedido";

function App() {
  return (
    <Router>
      <Global />
      <AppContainer>
        <SideBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={HomePage} />
          <Route exact path="/produto" component={Produto} />
          <Route exact path="/cliente" component={Cliente} />
          <Route exact path="/colaborador" component={Colaborador} />
          <Route exact path="/cargo" component={Cargo} />
          <Route exact path="/pedido" component={Pedido} />




        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
