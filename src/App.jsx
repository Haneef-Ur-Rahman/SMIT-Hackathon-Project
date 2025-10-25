import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import WelcomeContact from "./components/WelcomeContact";
import Support from "./components/Support";
import WelcomeSupport from "./components/WelcomeSupport";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Welcome from "./components/Welcome";
import HomeNavbar from "./components/HomeNavbar";
import Checkout from "./components/Checkout";
import { CartProvider } from "./components/context/CartContext";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <CartProvider>
      {/* Navbar logic */}
      {/* {!user ? (
        <HomeNavbar /> // Guest Navbar
      ) : (
        <Header /> // Logged-in Navbar
      )} */}

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/products"
          element={user ? <Products /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/checkout"
          element={user ? <Checkout /> : <Navigate to="/login" />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/welcomecontact" element={<WelcomeContact />} />
        <Route path="/welcomesupport" element={<WelcomeSupport />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
      <Footer />
    </CartProvider>
  );
};

export default App;
