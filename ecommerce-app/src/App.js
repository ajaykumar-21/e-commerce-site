import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
