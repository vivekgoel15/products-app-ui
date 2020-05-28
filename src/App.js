import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainRouter from "./MainRouter";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainRouter />
        <ToastContainer />
      </BrowserRouter>
    );
  }
}

export default App;
