import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] text-gray-300 pt-12 pb-6 border-t-1 border-grey">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 ">
        {/* 🔹 Brand */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold text-white tracking-wide">
            MiniStore
          </h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Your one-stop shop for premium products. Enjoy smooth shopping,
            secure checkout, and fast delivery 🚀
          </p>
        </div>

        {/* 🔹 Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-white mb-2">Contact Us</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 hover:text-white transition">
              <Mail size={20} className="text-blue-400" />
              <span>haneef04022004@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition">
              <Phone size={20} className="text-green-400" />
              <span>+92 308 3336559</span>
            </div>
          </div>
        </div>

        {/* 🔹 Socials */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-3">
            {[
              { icon: <Facebook size={20} />, color: "bg-blue-600" },
              { icon: <Instagram size={20} />, color: "bg-pink-500" },
              { icon: <Twitter size={20} />, color: "bg-sky-400" },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className={`${social.color} p-3 rounded-full text-white hover:scale-110 hover:shadow-lg transition-transform duration-300`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="mt-12 border-t border-white/20 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">MiniStore</span> — Designed
        with ❤️ by{" "}
        <span className="text-blue-400 font-medium">Haneef Ur Rahman</span>
      </div>
    </footer>
  );
}
