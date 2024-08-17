import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./components/CartPage/CartPage";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //The function first checks if the product already exists in the cart by finding it in the `cart` array.
    const exsitingProduct = cart.find((item) => item.id === product.id);

    if (exsitingProduct) {
      //If the product is found, it updates the cart by incrementing the quantity of the existing product.
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increment the quantity if the product matches
            : item
        )
      );
    } else {
      // If the product does not exist, add it to the cart with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCart = (productId, quantity) => {
    //Updates the quantity of a specific product in the shopping cart.
    setCart(
      cart.map(
        (item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, quantity) } // // Ensure quantity is at least 1
            : item // If the product ID does not match, the product remains unchanged in the cart.
      )
    );
  };

  // Removes a specific product from the shopping cart.
  const removeFromCart = (productId) => {
    const removedItem = cart.filter((item) => item.id !== productId); // Filter out the product with the matching ID from the cart
    setCart(removedItem); // Update the cart with the remaining items
  };

  return (
    <div className="App">
      <Navbar cart={cart} />
      <div>
        <ProductList addToCart={addToCart} />
      </div>
      <div>
        <CartPage
          cart={cart}
          updateCart={updateCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;
