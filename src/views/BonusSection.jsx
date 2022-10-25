import React from "react";
import Gift from "../components/Gift.jsx";
import WarrantyBanner from "../components/WarrantyBanner";
import BonusTextImg from "../assets/img/bonus-text.png";
import BonusTitleOneImg from "../assets/img/bonus-1-title.png";
import BonusTitleTwoImg from "../assets/img/bonus-2-title.png";

function BonusSection() {
  return (
    <React.Fragment>
      <section id="bonus-section">
        <div id="bonus-container">
          <p id="bonus-title">VOCÊ AINDA RECEBE DE PRESENTE</p>
          <div id="bonus-text-img-container">
            <img src={BonusTextImg} alt={"Bônus"} />
          </div>
          <div id="bonus-gifts-container">
            <div id="gift-container">
              <div id="gift-img-container">
                <Gift giftId={1}></Gift>
              </div>
              <div>
                <img
                  id="gift-bonus-title"
                  src={BonusTitleOneImg}
                  alt={"Titulo Bônus 1"}
                />
                <p>
                  Várias dicas inéditas para programadores iniciantes e
                  avançados aprenderem novas tecnologias mais rápido.
                </p>
              </div>
            </div>
            <div id="gift-container">
              <div id="gift-img-container">
                <Gift giftId={2}></Gift>
              </div>
              <div>
                <img
                  id="gift-bonus-title"
                  src={BonusTitleTwoImg}
                  alt={"Titulo Bônus 2"}
                />
                <p>
                  Valiosas técnicas para facilitar a aplicação do material em
                  sua rotina. Dicas, receitas, lista de materiais e muito mais!
                </p>
              </div>
            </div>
          </div>
        </div>
        <WarrantyBanner />
      </section>
    </React.Fragment>
  );
}

export default BonusSection;
