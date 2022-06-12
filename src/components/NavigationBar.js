import React from "react";
import "./NavigationBar.css";
import logo from "./assets/GitHubLogo.png";

const NavigationBar = () => {
  return (
    <section>
      <ul>
        <li>
          <img alt="GitHub logo" src={logo}></img>
        </li>
        <li>Why Github?</li>
        <li>Team</li>
        <li>Enterprise</li>
        <li>Explore</li>
        <li>Marketplace</li>
        <li>Pricing</li>
      </ul>
    </section>
  );
};

export default NavigationBar;
