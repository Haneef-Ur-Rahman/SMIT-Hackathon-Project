import React, { useState } from "react";
import { useCart } from "./context/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate minimally
    if (!form.name || !form.email || !form.address) {
      alert("Please fill required fields");
      return;
    }

    // In a real app you'd call your backend here.
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Header />
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 tracking-wide">
        Checkout
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200 space-y-5"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Billing Information
          </h3>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Street Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              name="zip"
              value={form.zip}
              onChange={handleChange}
              placeholder="ZIP Code"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <aside className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            Order Summary
          </h3>
          <div className="space-y-3 max-h-64 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {cart.map((i) => (
              <div
                key={i.id}
                className="flex justify-between items-center py-2 border-b"
              >
                <div className="text-sm text-gray-700">
                  {i.title} <span className="text-gray-500">x {i.qty}</span>
                </div>
                <div className="font-semibold text-gray-800">
                  ${(i.price * i.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-lg font-semibold flex justify-between text-gray-800 border-t pt-4">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
