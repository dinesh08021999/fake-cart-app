import React from "react";

const CartModal = ({ cart, onClose }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between py-2 border-b">
                <span>{item.title}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 font-bold">Total: ${total}</div>
        <button
          className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
