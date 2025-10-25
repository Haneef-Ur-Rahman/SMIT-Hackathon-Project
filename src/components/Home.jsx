import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useCart } from "./context/CartContext";
import Header from "./Header";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const { addToCart } = useCart();

  useEffect(() => {
    let mounted = true;
    async function fetchAll() {
      setLoading(true);
      try {
        const [pRes, cRes] = await Promise.all([
          axios.get("https://fakestoreapi.com/products"),
          axios.get("https://fakestoreapi.com/products/categories"),
        ]);
        if (!mounted) return;
        setProducts(pRes.data);
        setCategories(["", ...cRes.data]);
        const mx = Math.ceil(Math.max(...pRes.data.map((p) => p.price)));
        setMaxPrice(mx);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
    return () => {
      mounted = false;
    };
  }, []);

  const maxAvailable = useMemo(
    () => Math.ceil(Math.max(0, ...products.map((p) => p.price))),
    [products]
  );

  const filtered = useMemo(() => {
    return products
      .filter((p) => p.price <= maxPrice)
      .filter((p) => (category ? p.category === category : true))
      .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
  }, [products, maxPrice, search, category]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="loader w-12 h-12 border-4 border-blue-600 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🔹 Navbar fixed on top */}
      <Header />

      <div className="container mx-auto px-4 py-10 pt-5">
        {/* 🔹 Filter Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] p-6 rounded-2xl shadow-xl backdrop-blur-md text-white">
          {/* 🔍 Search + Category */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="🔍 Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2.5 w-64 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            >
              {categories.map((c, i) => (
                <option key={i} value={c} className="text-gray-800">
                  {c || "All Categories"}
                </option>
              ))}
            </select>
          </div>

          {/* 💰 Price Filter */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium bg-white/20 px-3 py-1.5 rounded-lg shadow">
              Max Price: <span className="text-yellow-300">${maxPrice}</span>
            </label>
            <input
              type="range"
              min="0"
              max={maxAvailable || 1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-48 accent-yellow-400 cursor-pointer"
            />
          </div>
        </div>

        {/* 🛍️ Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}
