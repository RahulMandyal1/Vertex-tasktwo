import React from "react";
import Heading from "../heading/Heading";
import "./parallax.css";

function Parallax() {
  return (
    <section className="parallax-container">
      <Heading headingText={"Experience Our Advance Equipments"} />
      <div className="content-container">
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde
          impedit, necessitatibus, soluta sit quam minima expedita atque
          corrupti reiciendis.
        </p>
        <button>Request a Quote</button>
      </div>
    </section>
  );
}

export default Parallax;
