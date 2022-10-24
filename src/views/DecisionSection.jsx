import React from "react";
import BuyButton from "../components/BuyButton.jsx";

const DecisionSection = () => {
  return (
    <section id="decision-section">
      <div id="decision-title">
        <p>
          E AÍ, AINDA NÃO SE DECIDIU? ESTÁ ESPERANDO O QUE PARA DESBLOQUEAR A
          SUA VERDADEIRA INTELIGÊNCIA?
        </p>
        <BuyButton content="VOU COMEÇAR AGORA!" />
      </div>
      <footer>Lucas Tinoco © 2022 - Todos os direitos reservados.</footer>
    </section>
  );
};

export default DecisionSection;
