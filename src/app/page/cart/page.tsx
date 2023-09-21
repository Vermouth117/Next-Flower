
import React from "react";

import "./page.css";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";

const Cart = () => {
  return (
    <>
      <Header />
      <main className="cart-box">
        <h2 className="cart-title">Cart</h2>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
