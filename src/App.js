import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import BreakingBadApp from "./Components/BreakingBad/BreakingBadApp";
import TodoApp from "./Components/TodoApp/TodoApp";
import CryptoApp from "./Components/CryptoApp/CryptoApp";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact as component={Home}></Route>
          <Route
            path='/BreakingBad'
            exact
            as
            component={BreakingBadApp}
          ></Route>
          <Route path='/TaskManager' exact as component={TodoApp}></Route>
          <Route path='/Crypto' exact as component={CryptoApp}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
