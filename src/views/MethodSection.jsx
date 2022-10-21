import React from "react";
import MethodBenefits from "../components/MethodBenefits.jsx";

const MethodSection = () => {
  return (
    <React.Fragment>
      <section id="method-section">
        <p>CONHEÇA O MÉTODO DE ENSINO</p>
        <div id="method-cards-container">
          <MethodBenefits />
        </div>
      </section>
    </React.Fragment>
  );
};

export default MethodSection;
