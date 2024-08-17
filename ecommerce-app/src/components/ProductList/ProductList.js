import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetches product data from the Fake Store API and updates the state with the fetched data.
    const fetchData = async () => {
      // On success, the product data is stored in the state using `setProducts`.
      try {
        const res = await axios.get("https://fakestoreapi.com/products"); // Uses Axios to send a GET request to the API endpoint.
        const data = res.data;
        setProducts(data);
      } catch (error) {
        //If an error occurs during the fetch, it is caught and logged to the console.
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // This function is called immediately to load the product data when the component mounts.
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
