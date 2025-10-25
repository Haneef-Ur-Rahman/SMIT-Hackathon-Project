import React from "react";
import { LifeBuoy, Mail, MessageCircle, Phone } from "lucide-react";
import Header from "./Header";

export default function Support() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* 🔹 Navbar top */}
      <Header />

      {/* 🔹 Centered Support Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <LifeBuoy size={48} className="text-blue-700" />
            </div>
            <h2
              className="text-4xl font-bold text-center mb-4 
              bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] 
              bg-clip-text text-transparent"
            >
              Customer Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Welcome to MiniStore Support! We’re here to assist you with any
              issues regarding your orders, returns, payments, or product
              inquiries. Our team strives to respond as quickly as possible to
              ensure your satisfaction.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Support */}
            <div className="p-6 bg-blue-50 rounded-xl hover:shadow-md transition">
              <Mail size={36} className="text-blue-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                Email Support
              </h4>
              <p className="text-gray-600 text-center mb-2">
                For general inquiries and order tracking
              </p>
              <p className="text-blue-700 font-medium text-center">
                haneef04022004@gmail.com
              </p>
            </div>

            {/* Live Chat */}
            <div className="p-6 bg-blue-50 rounded-xl hover:shadow-md transition">
              <MessageCircle size={36} className="text-blue-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                Live Chat
              </h4>
              <p className="text-gray-600 text-center mb-2">
                Chat with our support team in real-time
              </p>
              <p className="text-blue-700 font-medium text-center">
                Available 9AM – 6PM
              </p>
            </div>

            {/* Phone Support */}
            <div className="p-6 bg-blue-50 rounded-xl hover:shadow-md transition">
              <Phone size={36} className="text-blue-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                Phone Support
              </h4>
              <p className="text-gray-600 text-center mb-2">
                Call us for quick assistance or urgent queries
              </p>
              <p className="text-blue-700 font-medium text-center">
                +92 308 333 6559
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-12 border-t pt-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Still need help?
            </h4>
            <p className="text-gray-600 mb-4">
              Reach out via our{" "}
              <span className="text-blue-600 font-medium">Contact Page</span>—
              we’ll get back to you within 24 hours.
            </p>
            <button className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Go to Contact Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
