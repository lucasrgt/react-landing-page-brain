import React from "react";

const BuyButton = ({ content, optionalContent = "" }) => {
  return (
    <button id="buy-button">
      <h4>{content}</h4>
      <h4>{optionalContent}</h4>
    </button>
  );
};

export default BuyButton;
