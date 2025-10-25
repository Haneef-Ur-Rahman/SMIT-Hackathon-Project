import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "./Header";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* 🔹 Navbar top */}
      <Header />

      {/* 🔹 Centered Contact Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2
            className="text-4xl font-bold text-center mb-4 
            bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] 
            bg-clip-text text-transparent"
          >
            Contact Us
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Have a question about your order or our products? We’d love to hear
            from you! Reach out to our MiniStore Support Team — we’re always
            ready to help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-blue-600" size={26} />
                <div>
                  <h4 className="font-semibold text-gray-800">Email Support</h4>
                  <p className="text-gray-600">haneef04022004@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-blue-600" size={26} />
                <div>
                  <h4 className="font-semibold text-gray-800">Call Us</h4>
                  <p className="text-gray-600">+92 308 333 6559</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600" size={26} />
                <div>
                  <h4 className="font-semibold text-gray-800">Head Office</h4>
                  <p className="text-gray-600">
                    Peshawar University Campus, Peshawar, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-blue-600" size={26} />
                <div>
                  <h4 className="font-semibold text-gray-800">Working Hours</h4>
                  <p className="text-gray-600">Mon – Sat | 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-2 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
