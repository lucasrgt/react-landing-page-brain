import React from "react";
import BuyButton from "../components/BuyButton";
import PainProblems from "../components/PainProblems";

const PainSection = () => {
  return (
    <React.Fragment>
      <section id="pain-section">
        <div id="pain-title">
          <p>QUANTAS VEZES VOCÊ JÁ PASSOU POR ISSO?</p>
        </div>
        <div id="pain-problems">
          <PainProblems />
        </div>
        <div id="pain-button-container">
          <BuyButton content="MUDAR ISSO AGORA" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default PainSection;
