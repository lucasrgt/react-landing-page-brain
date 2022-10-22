import React from "react";
import BuyButton from "./BuyButton.jsx";
import PricesComparison from "./PricesComparison.jsx";

function PaymentContent() {
  return (
    <React.Fragment>
      <div id="payment-content">
        <div id="payment-info-container">
          <div id="payment-call">
            <p>MUDE O SEU CÉREBRO.</p>
            <p>MUDE A SUA VIDA.</p>
            <p>
              Se tornar mais inteligente é muito mais barato do que você pensa.
            </p>
            <BuyButton content="QUERO ME TORNAR MAIS INTELIGENTE" />
          </div>
          <div id="prices-comparison-container">
            <PricesComparison />
          </div>
        </div>
        <div></div>
        <div id="payment-final-container">
          <div id="payment-benefit">
            <div>
              <h1>🧠</h1>
            </div>
            <div>
              <p>SE TORNAR MAIS INTELIGENTE,</p>
            </div>
            <div>
              <p>INVESTIR NA SUA SAÚDE FÍSICA E MENTAL,</p>
            </div>
            <div>
              <p>
                OTIMIZAR O SEU TEMPO, PRECISANDO ESTUDAR MENOS E APRENDENDO MAIS
              </p>
            </div>
            <div>
              <p>E MUDAR A SUA VIDA E DAS PESSOAS QUE VOCÊ AMA</p>
            </div>
          </div>
          <div id="payment-final">
            <div id="payment-box">
              <div id="payment-final-price">
                <div>
                  <div id="old-price">
                    <h1>
                      <h2>239,99</h2>
                    </h1>
                  </div>
                  <div id="installments">
                    <p>12x*</p>
                    <p>12,99</p>
                  </div>
                  <p id="ou">ou</p>
                  <div id="entire">
                    <div id="entire-title">
                      <h1>
                        <span>R$</span> 119,99<h2>à vista com</h2>
                        <div>
                          <h3>50% OFF</h3>
                          <h4>DESCONTO EXCLUSIVO DE LANÇAMENTO</h4>
                        </div>
                      </h1>
                    </div>
                  </div>
                  <BuyButton
                    content={"QUERO COMEÇAR AGORA!"}
                    optionalContent={"R$ 0,43 POR DIA"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PaymentContent;
