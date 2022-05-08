import React from "react";
import "./Feature.scss";

const Feature = () => {
  return (
    <section id="feature" className="section-p1">
      <div className="fe-box">
        <img src="/assets/img/f1.png" alt="" />
        <h6>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src="/assets/img/f2.png" alt="" />
        <h6>Online order</h6>
      </div>
      <div className="fe-box">
        <img src="/assets/img/f3.png" alt="" />
        <h6>Save Money</h6>
      </div>
      <div className="fe-box">
        <img src="/assets/img/f4.png" alt="" />
        <h6>Promotions</h6>
      </div>
      <div className="fe-box">
        <img src="/assets/img/f5.png" alt="" />
        <h6>Happy Sell</h6>
      </div>
      <div className="fe-box">
        <img src="/assets/img/f6.png" alt="" />
        <h6>24/7 Support</h6>
      </div>
    </section>
  );
};

export default Feature;
