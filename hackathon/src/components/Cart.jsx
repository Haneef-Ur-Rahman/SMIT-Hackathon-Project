import React from "react";
import { useCart } from "./context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Cart() {
  const { cart, updateQty, removeFromCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Navbar always on top */}
        <Header />

        <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <Link
            to="/Home"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar always on top */}
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Cart</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-gray-600">${item.price.toFixed(2)}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="px-3 py-1 border rounded hover:bg-gray-100 transition"
                  >
                    -
                  </button>
                  <div className="px-3">{item.qty}</div>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-3 py-1 border rounded hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <aside className="bg-white p-6 rounded shadow">
            <div className="mb-4">
              <div>
                Total items: <strong>{totalItems}</strong>
              </div>
              <div className="text-xl font-semibold">
                Total: ${totalPrice.toFixed(2)}
              </div>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}
