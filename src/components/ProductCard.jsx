import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-700 mt-2">${product.price}</p>
      <button
        className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
