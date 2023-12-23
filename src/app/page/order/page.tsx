import React from "react";

import "./page.css";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";

const Order = () => {
  return (
    <>
      <Header />
      <main className="order">
        <h2 className="order-title">Order</h2>
      </main>
      <Footer />
    </>
  );
};

export default Order;
