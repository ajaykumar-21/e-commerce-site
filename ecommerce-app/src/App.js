import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exsitingProduct = cart.find((item) => item.id === product.id);
    console.log(exsitingProduct);

    if (exsitingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log(cart);
  };
  return (
    <div className="App">
      <Navbar cart={cart} />
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default App;
