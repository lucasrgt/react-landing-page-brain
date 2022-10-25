import React from "react";
import UseAnalyticsEventTracker from "./UseAnalyticsEventTracker.jsx";

const BuyButton = ({ content, optionalContent = "" }) => {
  const gaEventTracker = UseAnalyticsEventTracker("Buy Button");
  return (
    <a
      target={"_blank"}
      rel="noopener noreferrer"
      href="https://pay.hotmart.com/F75999336L?checkoutMode=10"
      onClick={() => gaEventTracker("buy")}
    >
      <button id="buy-button">
        <h4>{content}</h4>
        <h4>{optionalContent}</h4>
      </button>
    </a>
  );
};

export default BuyButton;
