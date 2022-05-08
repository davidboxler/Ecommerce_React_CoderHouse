import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about-head" className="section-p1">
      <img src="../../assets/img/a6.jpg" />
      <div>
        <h2>Quienes somos?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </marquee>
      </div>
    </section>
  );
};

export default About;
