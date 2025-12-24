import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import "../App.css";

// 12 Plants, 3 categories
const plants = [
  { id: 1, name: "Tulsi", category: "Medicinal", price: 120, desc: "Boosts immunity", img: "/images/Tulsi.jpg" },
  { id: 2, name: "Aloe Vera", category: "Medicinal", price: 150, desc: "Skin healing plant", img: "/images/Aloevera.jpg" },
  { id: 3, name: "Mint", category: "Aromatic", price: 100, desc: "Fresh aroma", img: "/images/Mint.jpg" },
  { id: 4, name: "Lavender", category: "Aromatic", price: 200, desc: "Calming fragrance", img: "/images/Lavender.jpg" },
  { id: 5, name: "Rosemary", category: "Aromatic", price: 180, desc: "Herbal plant", img: "/images/Rosemary.jpg" },
  { id: 6, name: "Basil", category: "Medicinal", price: 130, desc: "Culinary & medicinal", img: "/images/Basil.jpg" },
  { id: 7, name: "Spider Plant", category: "Air-Purifying", price: 220, desc: "Removes toxins", img: "/images/SpiderPlant.jpg" },
  { id: 8, name: "Snake Plant", category: "Air-Purifying", price: 250, desc: "Low maintenance", img: "/images/SnakePlant.jpg" },
  { id: 9, name: "Peace Lily", category: "Air-Purifying", price: 300, desc: "Beautiful white flowers", img: "/images/PeaceLily.jpg" },
  { id: 10, name: "Chamomile", category: "Medicinal", price: 140, desc: "Calming herb", img: "/images/Chamomile.jpg" },
  { id: 11, name: "Jasmine", category: "Aromatic", price: 210, desc: "Sweet scent", img: "/images/Jasmine.jpg" },
  { id: 12, name: "Ageratum", category: "Air-Purifying", price: 190, desc: "Indoor flowering plant", img: "/images/Ageratum.jpg" },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [addedIds, setAddedIds] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedIds([...addedIds, plant.id]);
  };

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div className="products">
      {categories.map((category) => (
        <div key={category}>
          <h2>{category} Plants</h2>
          <div className="grid">
            {plants
              .filter((p) => p.category === category)
              .map((p) => (
                <div className="card" key={p.id}>
                  <img src={p.img} alt={p.name} />
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <p>₹{p.price}</p>
                  <button
                    onClick={() => handleAddToCart(p)}
                    disabled={addedIds.includes(p.id)}
                  >
                    {addedIds.includes(p.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
