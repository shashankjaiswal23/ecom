import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen';

function App() {
 const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add('open')
}
 const closeNev =() =>{
    document.querySelector('.sidebar').classList.remove('open')
}
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">amazon</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="closeNev" onClick={closeNev}>
          {" "}
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>
          <li>
            <a href="index.html">Shirts</a>
          </li>
        </ul>
      </aside>

      <main className="main">
        <div className="content">
          <BrowserRouter>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </BrowserRouter>
        </div>
      </main>

      <footer className="footer">All right reserved</footer>
    </div>
  );
}

export default App;
