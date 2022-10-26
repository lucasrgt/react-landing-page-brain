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
        <div id="module-information">
          <div>
            <h2 className="beige">+DE </h2>
            <h1>150</h1>
            <h2 className="beige">PÁGINAS</h2>
          </div>
          <div>
            <h1> 5 </h1>
            <h2 className="blue">MÓDULOS</h2>
          </div>
          <div>
            <h1>7</h1>
            <h2 className="pink"> ANOS DE CONHECIMENTO </h2>
          </div>
        </div>
        <div id="module-button">
          <BuyButton content={"QUERO COMEÇAR AGORA!"} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ModulesSection;
