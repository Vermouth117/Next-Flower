import React from "react";

import "./page.css";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";

const User = () => {
  return (
    <>
      <Header />
      <main className="user-box">
        <h2 className="user-title">History</h2>
      </main>
      <Footer />
    </>
  );
};

export default User;
