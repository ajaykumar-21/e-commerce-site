import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const data = res.data;
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductList;
