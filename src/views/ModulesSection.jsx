import React from "react";
import ModuleCards from "../components/ModuleCards.jsx";
import BuyButton from "../components/BuyButton.jsx";

const ModulesSection = () => {
  return (
    <React.Fragment>
      <section id="modules-section">
        <p id="modules-title">O QUE VOCÊ APRENDERÁ</p>
        <div>
          <ModuleCards />
        </div>
        <BuyButton content={"QUERO COMEÇAR AGORA!"} />
      </section>
    </React.Fragment>
  );
};

export default ModulesSection;
