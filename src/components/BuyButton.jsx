import React from "react";
import UseAnalyticsEventTracker from "./UseAnalyticsEventTracker.jsx";

const BuyButton = ({ content, optionalContent = "" }) => {
  const gaEventTracker = UseAnalyticsEventTracker("checkout");
  return (
    <a
      target={"_blank"}
      rel="noopener noreferrer"
      href="https://pay.hotmart.com/F75999336L?off=vnqd0xdm"
      onClick={() => gaEventTracker("checkout")}
    >
      <button id="buy-button">
        <div id="button-container">
          <h4>{content}</h4>
          <h4>{optionalContent}</h4>
        </div>
      </button>
    </a>
  );
};

export default BuyButton;
