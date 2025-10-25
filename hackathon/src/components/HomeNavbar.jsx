import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        {/* 🔹 Logo */}
        <div
          className="text-2xl font-bold text-white tracking-wide cursor-pointer flex items-center gap-2"
          onClick={() => (window.location.href = "/")}
        >
          🛍️ <span className="hover:opacity-90 transition">MiniStore</span>
        </div>

        {/* 🔹 Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-white font-medium">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/welcomecontact">Contact</NavLink>
          <NavLink to="/welcomesupport">Support</NavLink>
          <NavLink to="/signup">
            <button className="text-black bg-red-500 border-2 border-white p-1 font-bold">
              {" "}
              Sign Up{" "}
            </button>
          </NavLink>
        </nav>

        {/* 🔹 Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e293b] bg-opacity-95 text-white">
          <div className="flex flex-col items-center gap-4 py-4">
            <NavLink to="/home" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/welcomecontact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/welcomesupport" onClick={() => setMenuOpen(false)}>
              Support
            </NavLink>
            <NavLink to="/signup" onClick={() => setMenuOpen(false)}>
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

// 🔹 Reusable NavLink with hover underline animation
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
