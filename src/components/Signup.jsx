// Signup.jsx
import React, { useState } from "react";
import { auth, db, provider } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HomeNavbar from "./HomeNavbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, gender, password, confirmPassword } =
      formData;

    if (
      !fullName ||
      !email ||
      !phone ||
      !gender ||
      !password ||
      !confirmPassword
    ) {
      toast.warn("Please fill all fields ⚠️");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, "users"), {
        fullName,
        email,
        phone,
        gender,
        createdAt: new Date().toISOString(),
      });

      toast.success("Signup Successful! 🎉");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await addDoc(collection(db, "users"), {
        fullName: user.displayName || "",
        email: user.email,
        phone: user.phoneNumber || "",
        gender: "",
        createdAt: new Date().toISOString(),
      });

      toast.success("Google Signup Successful! 🎉");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navbar fixed top */}
      <header className="fixed top-0 left-0 w-full z-50">
        <HomeNavbar />
      </header>

      {/* Page content with padding top so navbar doesn't overlap */}
      <div className="flex flex-col items-center justify-center px-4 py-16 pt-28 ">
        <div className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] backdrop-blur-md text-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Create Account
          </h2>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-[#1F2A4F] hover:bg-[#4A427B] rounded-lg font-medium transition-all"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-5">
            <button
              onClick={handleGoogleSignup}
              className="w-full py-3 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition-all"
            >
              Sign Up with Google
            </button>
          </div>

          <p className="text-center text-sm text-gray-200 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-300 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
