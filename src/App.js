import React from "react";
import "./App.css";
import Product from "./components/Product/Product.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
