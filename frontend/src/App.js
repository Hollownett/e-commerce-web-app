import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button className="sidebar-button" onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">E-commerce</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin">Sign In </a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="close-sidebar-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">CPU</a>
            </li>
            <li>
              <a href="index.html">GPU</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
