import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./components/CartPage/CartPage";
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
  };

  const updateCart = (productId, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };
  return (
    <div className="App">
      <Navbar cart={cart} />
      <div>
        <ProductList addToCart={addToCart} />
      </div>
      <div>
        <CartPage cart={cart} updateCart={updateCart} />
      </div>
    </div>
  );
}

export default App;
