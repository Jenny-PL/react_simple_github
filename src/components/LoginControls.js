import React from "react";
import "./LoginControls.css";

const LoginControls = () => {
  return (
    <ul>
      <li className="signInChoices">
        <a
          id="signIn"
          href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fenterprise%3F%26ef_id%3DEAIaIQobChMIo8iQuemo-AIVfz6tBh2hqQgDEAAYASAAEgKqAPD_BwE%3AG%3As%26OCID%3DAID2202669_SEM_EAIaIQobChMIo8iQuemo-AIVfz6tBh2hqQgDEAAYASAAEgKqAPD_BwE%3AG%3As%26gclid%3DEAIaIQobChMIo8iQuemo-AIVfz6tBh2hqQgDEAAYASAAEgKqAPD_BwE"
        >
          Sign In{" "}
        </a>{" "}
      </li>
      <li>
        {" "}
        <a
          id="SignUp"
          href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2Fenterprise&source=header"
        >
          Sign Up
        </a>
      </li>
    </ul>
  );
};

export default LoginControls;
