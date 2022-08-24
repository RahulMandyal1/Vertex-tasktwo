import React from "react";
import "./counterinfo.css";

function CounterInfo() {
  return (
    <div className="modal-container">
      <div className="counter-text-container">
        <span className="counter-number">1,000</span>
        <span className="counter-text">Years on the market</span>
      </div>
      <div className="counter-text-container">
        <span className="counter-number">12,0000</span>
        <span className="counter-text">Operational Brigades</span>
      </div>
      <div className="counter-text-container">
        <span className="counter-number">10,0000</span>
        <span className="counter-text">Units of Engineering</span>
      </div>
      <div className="counter-text-container">
        <span className="counter-number">12,921</span>
        <span className="counter-text">Employees of the company</span>
      </div>
    </div>
  );
}

export default CounterInfo;
