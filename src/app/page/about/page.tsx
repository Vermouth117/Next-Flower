
import React from "react";

import "./page.css";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="about">
        <h2 className="about-title">About</h2>
      </main>
      <Footer />
    </>
  );
};

export default About;
