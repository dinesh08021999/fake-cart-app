import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import CartModal from "./components/CartModal.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={() => setShowCart(true)} />
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {showCart && <CartModal cart={cart} onClose={() => setShowCart(false)} />}
    </div>
  );
}

export default App;
