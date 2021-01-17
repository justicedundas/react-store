import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // TODO: fix burger menu toggle and visibility
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="#" width="112" height="28" alt="LOGO" />
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span>Home</span>
            <span>Store</span>
            <span>Cart</span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu ">
          <div className="navbar-end">
            <div className="tabs is-right">
              <ul>
                <li>
                  <Link className="navbar-item" to="/">
                    <span className="icon-text">
                      <span className="icon is-large">
                        <i className="fas fa-home"></i>
                      </span>
                      <span>Home</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/products">
                    <span className="icon is-large">
                      <i className="fas fa-shopping-bag"></i>
                    </span>
                    <span>Store</span>
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/cart">
                    <span className="icon is-large">
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                    <span>Cart</span>
                  </Link>
                </li>
                <span className="navbar-item">
                  <Link className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                    <span>View Source</span>
                  </Link>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
