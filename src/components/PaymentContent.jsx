import React from "react";
import BuyButton from "./BuyButton.jsx";
import PricesComparison from "./PricesComparison.jsx";

function PaymentContent() {
  return (
    <React.Fragment>
      <div id="payment-content">
        <div id="payment-call">
          <p>MUDE O SEU CÉREBRO.</p>
          <p>MUDE A SUA VIDA.</p>
          <p>
            Se tornar mais inteligente é muito mais barato do que você imagina.
          </p>
          <BuyButton content="QUERO ME TORNAR MAIS INTELIGENTE" />
        </div>
        <div id="prices-comparison-container">
          <PricesComparison />
        </div>
      </div>
    </React.Fragment>
  );
}

export default PaymentContent;
