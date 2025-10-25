import React from "react";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col border-2 border-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155]">
      {/* Product Image */}
      <div className="relative group">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          ${product.price.toFixed(2)}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col px-4 py-3 text-center">
        <h3 className="font-semibold text-gray-800 text-sm md:text-base line-clamp-2 mb-2">
          {product.title}
        </h3>
        <p className="text-gray-500 text-xs md:text-sm mb-4 line-clamp-3">
          {product.description?.slice(0, 80) || "A great product you'll love."}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAdd(product)}
          className="mt-auto flex items-center justify-center gap-2 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-2 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
        >
          <ShoppingCart size={18} />
          <span className="font-medium text-sm">Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
