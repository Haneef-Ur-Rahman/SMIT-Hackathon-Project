import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, LogOut } from "lucide-react";
import { useCart } from "./context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Logout handler
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        {/* 🔹 Logo */}
        <div
          className="text-2xl font-bold text-white tracking-wide cursor-pointer flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          🛍️ <span className="hover:opacity-90 transition">MiniStore</span>
        </div>

        {/* 🔹 Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-white font-medium">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/support">Support</NavLink>
        </nav>

        {/* 🔹 Right Section */}
        <div className="flex items-center gap-4">
          <Link
            to="/checkout"
            className="hidden sm:inline-block px-4 py-2 bg-green-600 rounded-md text-white hover:bg-green-700 transition"
          >
            Checkout
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center gap-2 px-3 py-2 bg-white text-gray-800 rounded-md shadow hover:bg-gray-100 transition"
          >
            <ShoppingCart size={20} />
            <span className="font-medium">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* 🔹 Logout Button */}
          <button
            onClick={handleLogout}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            title="Logout"
          >
            <LogOut size={18} /> Logout
          </button>

          {/* 🔹 Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 bg-opacity-95 text-white">
          <div className="flex flex-col items-center gap-4 py-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/support" onClick={() => setMenuOpen(false)}>
              Support
            </NavLink>
            <Link
              to="/checkout"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition"
            >
              Checkout
            </Link>
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-100 transition flex items-center gap-2"
            >
              <ShoppingCart size={20} /> Cart ({totalItems})
            </Link>
            {/* 🔹 Logout in Mobile */}
            <button
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 transition"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// 🔹 Reusable NavLink component with hover underline
function NavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="relative group hover:text-gray-200 transition"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}
