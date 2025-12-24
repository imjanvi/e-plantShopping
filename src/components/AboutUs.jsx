import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Make sure CSS is imported

export default function AboutUs() {
  return (
    <div className="background-image">
      <h1 className="landing-title">Paradise Nursery 🌱</h1>
      <p className="landing-subtitle">
        Paradise Nursery is your one-stop online shop for healthy houseplants.
        Our mission is to bring nature into your home, improve indoor air quality,
        and brighten your living spaces with beautiful, hand-selected plants.
        We specialize in aromatic, medicinal, and air-purifying plants, making it
        easy for you to find the perfect plant for your lifestyle.
      </p>
      <Link to="/products">
        <button>Explore Plants</button>
      </Link>
    </div>
  );
}
