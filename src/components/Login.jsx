// Login.jsx
import React, { useState } from "react";
import { auth, provider } from "../firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HomeNavbar from "./HomeNavbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warn("Please enter both email and password ⚠️");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful! 🎉");
      setTimeout(() => navigate("/home"), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google Login Successful! 🎉");
      setTimeout(() => navigate("/home"), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Navbar fixed top */}
      <header className="fixed top-0 left-0 w-full z-50">
        <HomeNavbar />
      </header>

      {/* Page content with padding top so navbar doesn't overlap */}
      <div className="flex flex-col items-center justify-center px-4 pt-30">
        <div className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] backdrop-blur-md text-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Welcome Back
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-[#0044ff] hover:bg-[#4A427B] rounded-lg font-medium transition-all"
            >
              Login
            </button>
          </form>

          <div className="mt-5">
            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition-all"
            >
              Login with Google
            </button>
          </div>

          <p className="text-center text-sm text-gray-200 mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-300 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
