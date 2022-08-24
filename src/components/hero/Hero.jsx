import React from "react";
import "./hero.css";
import Header from "../header/Header";
import CounterInfo from "./CounterInfo"

function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="container">
        <h2 className="sub-heading">
          We are Vetex Constructing and Development
        </h2>
        <h1 className="hero-heading">
          Constructing is our
          <br />
          life buisness
        </h1>
      </div>
      <div className="additional-info">
      <CounterInfo/>
      </div>
    </section>
  );
}

export default Hero;
