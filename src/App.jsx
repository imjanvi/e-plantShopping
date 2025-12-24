import React from "react"; 
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

export default function App() {
  const cart = useSelector((state) => state.cart) || {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  };

  return (
    <div>
      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar">
        <div className="logo">🌱 Paradise Nursery</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart <span className="cart-count">{cart.totalQuantity}</span>
          </Link>
        </div>
      </nav>

      {/* ---------- ROUTES ---------- */}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route
          path="/cart"
          element={
            <div className="cart-page">
              {cart.items.length === 0 ? (
                <h2>Your cart is empty</h2>
              ) : (
                cart.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))
              )}

              <h2>
                Total Cost: ₹
                {cart.items.reduce((sum, item) => sum + item.total, 0)}
              </h2>

              <div className="cart-buttons">
                <Link to="/products">
                  <button>Continue Shopping</button>
                </Link>
                <button onClick={() => alert("Coming Soon!")}>Checkout</button>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
