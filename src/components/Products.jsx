import React, { useEffect, useState, useContext } from "react";
// import { CartContext } from "./context/CartContext";
import { useCart } from "./context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [range, setRange] = useState(200);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">🛒 Products</h2>
      <div className="text-center mb-4">
        <label className="mr-2 font-semibold">Filter by Price:</label>
        <input
          type="range"
          min="0"
          max="200"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="w-64"
        />
        <span className="ml-2">${range}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((p) => p.price <= range)
          .map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow p-4 flex flex-col items-center bg-white"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-3"
              />
              <h3 className="font-semibold text-center mb-2">
                {product.title.substring(0, 25)}...
              </h3>
              <p className="text-gray-700 font-medium mb-2">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
