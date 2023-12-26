"use client";

import React, { useEffect, useState } from "react";

import "./page.css";
import Modal from "./Modal";
import { FlowerInfo } from "@/app/models/types";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";

const OnlineShop = () => {
  const [FlowerList, setFlowerList] = useState([]);

  useEffect(() => {
    (async () => {
      const getFlowerList = await fetch("/api/flowerList").then((data) =>
        data.json()
      );

      setFlowerList(getFlowerList.flowerList);
    })();
  }, []);

  return (
    <>
      <Header />
      <main className="online-shop">
        <h2 className="online-shop-title">Flower</h2>
        <article className="online-shop-flower-cardList">
          {FlowerList &&
            FlowerList.map((flowerInfo: FlowerInfo, index) => {
              return (
                <section
                  key={flowerInfo.id}
                  className="online-shop-flower-card"
                >
                  <div>
                    <img
                      className="online-shop-flower-image"
                      src={flowerInfo.picture_url}
                      alt={flowerInfo.name}
                    />
                  </div>
                  <h3 className="online-shop-flower-title">
                    {flowerInfo.name}
                  </h3>
                  <p className="online-shop-flower-price">
                    {`¥${flowerInfo.price
                      .slice(0, -3)
                      .concat(",", flowerInfo.price.slice(-3))}`}
                  </p>
                </section>
              );
            })}
        </article>
        {/* <Modal /> */}
      </main>
      <Footer />
    </>
  );
};

export default OnlineShop;
