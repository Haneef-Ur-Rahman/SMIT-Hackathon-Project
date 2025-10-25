import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <HomeNavbar />
      </header>

      {/* Page content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 pt-24 bg-gray-900">
        <div
          className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] 
    backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-16 max-w-5xl w-full text-center
    transition-all duration-500 animate-fadeIn"
        >
          {/* Light reflection */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

          {/* Decorative accent */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full blur-sm opacity-60"></div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent tracking-tight drop-shadow-md">
            Welcome to MiniStore
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg mb-8 font-medium">
            Discover quality products, seamless shopping experience, and fast
            delivery.
          </p>

          {/* Features / highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              {
                icon: "🚀",
                text: "Fast Delivery",
                color: "from-yellow-400 to-yellow-500",
              },
              {
                icon: "💳",
                text: "Secure Payment",
                color: "from-green-400 to-green-500",
              },
              {
                icon: "⭐",
                text: "Premium Quality",
                color: "from-pink-400 to-pink-500",
              },
              {
                icon: "📞",
                text: "24/7 Support",
                color: "from-blue-400 to-blue-500",
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 
      bg-gradient-to-r ${service.color} text-white font-semibold shadow-lg 
      hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer`}
              >
                <span className="text-lg">{service.icon}</span>
                <span>{service.text}</span>
              </div>
            ))}
          </div>

          {/* Why choose us */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 text-left text-gray-300">
            <div className="p-4 border border-white/20 rounded-xl bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Wide Product Range
              </h3>
              <p className="text-gray-400 text-sm">
                From electronics to fashion, we offer a wide variety of products
                to meet all your needs.
              </p>
            </div>
            <div className="p-4 border border-white/20 rounded-xl bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Exclusive Deals
              </h3>
              <p className="text-gray-400 text-sm">
                Enjoy exclusive discounts, seasonal sales, and special offers
                available only on MiniStore.
              </p>
            </div>
            <div className="p-4 border border-white/20 rounded-xl bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Trusted & Secure
              </h3>
              <p className="text-gray-400 text-sm">
                Shop with confidence — we ensure secure payments and quality
                assurance on every product.
              </p>
            </div>
            <div className="p-4 border border-white/20 rounded-xl bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Fast & Reliable Support
              </h3>
              <p className="text-gray-400 text-sm">
                Our support team is ready to assist you anytime with queries,
                returns, or order tracking.
              </p>
            </div>
          </div>

          {/* Small note */}
          <p className="text-gray-400 text-xs mt-8">
            Your satisfaction is our priority — shop with confidence and
            experience the MiniStore difference.
          </p>
        </div>
        <br />
        <br />
      </main>
    </div>
  );
};

export default Welcome;
