import React from "react";
import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";
import "../App.css";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-card">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Unit Price: ₹{item.price}</p>
      <p>Total: ₹{item.total}</p>

      <div className="qty">
        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
      </div>

      <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
    </div>
  );
}
