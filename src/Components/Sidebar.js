import React from "react";
import favorite from "../images/favorites.png";
import logo from "../images/logo.png";
import Cart from "../Pages/Cart";

import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import Shop from "./Shop";

function Sidebar() {
  return (
    <div>
      <div className="header-area clearfix">
        {/* <!-- Close Icon --> */}
        <div className="nav-close">
          <i className="fa fa-close" aria-hidden="true"></i>
        </div>
        {/* <!-- Logo --> */}
        <div className="logo">
        <Link to="/home">
          <a >
            <img src={logo} alt="" />
          </a>
          </Link>
        </div>
        {/* <!--  Nav --> */}
        <nav className="amado-nav">
          <ul>
            <Link to="/home">
              <li className="active">
                <a>Home</a>
              </li>
            </Link>
            <li>
              <a href="shop.html">Catégories</a>
            </li>
            <li>
              <a href="product-details.html">Product</a>
            </li>
            <Link to="/cart/">
              <li>
                <a>Cart</a>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <a>Login</a>
              </li>
            </Link>
          </ul>
        </nav>
        {/* <!-- Button Group --> */}
        <div className="amado-btn-group mt-30 mb-100">
          <a className="btn amado-btn mb-15">
            <Shop />
          </a>
      
        </div>
        {/* <!-- Cart Menu --> */}
        <div className="cart-fav-search mb-100">
          <a href="#" className="fav-nav">
            <img src={favorite} alt="" /> Favourite
          </a>
          <Searchbar />
        </div>
        {/* <!-- Social Button --> */}
        <div className="social-info d-flex justify-content-between">
          <a href="#">
            <i className="fa fa-pinterest" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
