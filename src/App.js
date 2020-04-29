import React from "react";
import "./index.css";

import { BrowserRouter as Router,  Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Cart from "./Pages/Cart";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import ProductDetail from './Components/ProductDetail'
function App({ match }) {
  return (
    <div className="main-content-wrapper d-flex clearfix">
      <Router>
        <Route exact path="/home">
          <Sidebar />
          <ProductList />
        
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path = "description/:id" component={ProductDetail}></Route>
      </Router>
    </div>
  );
}

export default App;
