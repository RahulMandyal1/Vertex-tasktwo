import React from "react";
import Heading from "../heading/Heading";
import "./feature.css";
import Card from "./Card";

function Featuresection() {
  return (
    <section className="feature-container">
      <Heading headingText={"Your Main Features & Benefits"} />
      <div className="cards-container">
        <Card
          width={"flex-23"}
          iconurl={"https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-setting-esport-xnimrodx-blue-xnimrodx.png"}
          altText="alt text goes here"
          cardHeading="Construction Management"
          cardDescription="
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        />
        <Card
          width={"flex-23"}
          iconurl={"https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-setting-esport-xnimrodx-blue-xnimrodx.png"}
          altText="alt text goes here"
          cardHeading="Construction Management"
          cardDescription="
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        />
        <Card
          width={"flex-23"}
          iconurl={"https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-setting-esport-xnimrodx-blue-xnimrodx.png"}
          altText="alt text goes here"
          cardHeading="Construction Management"
          cardDescription="
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        />
        <Card
          width={"flex-23"}
          iconurl={"https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-setting-esport-xnimrodx-blue-xnimrodx.png"}
          altText="alt text goes here"
          cardHeading="Construction Management"
          cardDescription="
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        />
      </div>
    </section>
  );
}

export default Featuresection;
