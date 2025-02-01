import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import OrderPlacing from "./Pages/OrderPlacing/OrderPlacing";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Components/SignUp/SignUp"

export default function App() {

  const [ShowSignUp,setShowSignUp] = useState(false)

  return (
    <>
      {ShowSignUp?<SignUp setShowSignUp={setShowSignUp} />:<></>}
      <div className="app">
        <Navbar setShowSignUp={setShowSignUp} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderPlacing />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
