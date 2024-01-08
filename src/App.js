import "./App.css";
import HomePage from "./components/home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  let cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
