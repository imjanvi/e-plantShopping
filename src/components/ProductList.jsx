import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Tulsi",
    category: "Medicinal",
    price: 120,
    desc: "Boosts immunity",
    img: "/images/Tulsi.jpg",
  },
  {
    id: 2,
    name: "Aloe Vera",
    category: "Medicinal",
    price: 150,
    desc: "Skin healing plant",
    img: "/images/Aloevera.jpg",
  },
  {
    id: 3,
    name: "Lavender",
    category: "Aromatic",
    price: 200,
    desc: "Calming fragrance",
    img: "/images/Lavender.jpg",
  },
  {
    id: 4,
    name: "Mint",
    category: "Aromatic",
    price: 100,
    desc: "Fresh aroma",
    img: "/images/Mint.jpg",
  },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="products">
      <h1>Our Plants</h1>

      <div className="grid">
        {plants.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <p>₹{p.price}</p>
            <button onClick={() => dispatch(addToCart(p))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
