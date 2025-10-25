// Support.jsx
import React from "react";
import { LifeBuoy, Mail, MessageCircle, Phone } from "lucide-react";
import HomeNavbar from "./HomeNavbar";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar fixed at top */}
      <header className="fixed top-0 left-0 w-full z-50">
        <HomeNavbar />
      </header>

      {/* Page content with padding-top so it doesn't overlap navbar */}
      <section className="flex flex-col items-center justify-center py-16 px-6 pt-28">
        <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">
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
            <button
              onClick={() => (window.location.href = "/welcomecontact")}
              className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] text-white px-6 py-2 rounded-lg hover:from-[#1e293b] hover:to-[#475569] transition"
            >
              Go to Contact Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
