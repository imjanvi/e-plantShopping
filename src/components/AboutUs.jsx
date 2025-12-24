import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="landing">
      <h1 className="landing-title">Paradise Nursery 🌱</h1>
      <p className="landing-subtitle">Where the people find their beautiful fragrances!</p>
      <Link to="/products">
        <button>Explore Plants</button>
      </Link>
    </div>
  );
}
