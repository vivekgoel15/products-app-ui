import React from "react";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: '#0099ff' };
  else return { color: '#ffffff' };
};

const Menu = ({history})  => (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} style={isActive(history, `/home`)} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/products"} style={isActive(history, `/products`)} className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/products/create"} style={isActive(history, `/products/create`)} className="nav-link">
              Create Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} style={isActive(history, `/about`)} className="nav-link">
              About Us
            </Link>
          </li>
        </div>
      </nav>
    );

export default withRouter(Menu);
