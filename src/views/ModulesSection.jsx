import React from "react";
import ModuleCards from "../components/ModuleCards.jsx";

const ModulesSection = () => {
  return (
    <React.Fragment>
      <section id="modules-section">
        <p id="modules-title">O QUE VOCÊ APRENDERÁ</p>
        <div>
          <ModuleCards />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ModulesSection;
