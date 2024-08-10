import React from "react";
import "./productcard.css";
import { toast } from "react-toastify";

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success(`${product.title} added to cart`, {
      position: "top-right", // Position of the toast
      autoClose: 3000, // Duration in milliseconds
      hideProgressBar: false, // Show progress bar
      closeOnClick: true, // Close on click
      pauseOnHover: true, // Pause on hover
      draggable: true, // Enable dragging
      progress: undefined, // Progress bar styling
    });
  };

  return (
    <div className="productcard">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} $</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
