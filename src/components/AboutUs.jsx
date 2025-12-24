import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="landing-title">Paradise Nursery 🌱</h1>
      <p className="landing-subtitle">
        Your one-stop shop for healthy, beautiful house plants. Our mission is to bring nature’s calm and freshness into every home.
      </p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
