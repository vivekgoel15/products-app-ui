import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddProduct from "./components/products-add";
import EditProduct from "./components/products-edit";
import ProductList from "./components/products-list";
import Home from "./components/home";
import About from "./components/about";
import Menu from "./components/Menu";

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/home"]} component={Home} />
            <Route exact path={["/", "/products"]} component={ProductList} />
            <Route exact path="/products/create" component={AddProduct} />
            <Route exact path="/products/:id" component={EditProduct} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default MainRouter;
