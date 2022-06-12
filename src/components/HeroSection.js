import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const heading = "Where the world builds software";
  const paragraph =
    "Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.";
  return (
    <section>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </section>
  );
};

export default HeroSection;
