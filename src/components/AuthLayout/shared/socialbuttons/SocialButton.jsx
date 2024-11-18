import React from "react";
import "./SocialButton.css";
import { FacebookIcon, GoogleIcon } from "../../../../assets/globalicon";

const SocialButtons = () => {
  return (
    <div className="social-buttons pt-1">
      <button className="facebook-btn">
        <span className="mx-4">
          <FacebookIcon />
        </span>
        Connect with Facebook
      </button>
      <button className="google-btn">
        <span className="mx-4">
          <GoogleIcon />
        </span>
        Connect with Google
      </button>
    </div>
  );
};

export default SocialButtons;
