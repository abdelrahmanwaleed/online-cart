import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../state/cartSlice";
import "./productlist.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //----------------------------------USe Effect State to fetch data from API to the APP----------
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };
  if (loading) {
    return <p>Loading products</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="productlist">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
