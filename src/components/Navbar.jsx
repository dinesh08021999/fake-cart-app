import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Fake Store</h1>
      <button
        className="relative bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={onCartClick}
      >
        Cart
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
