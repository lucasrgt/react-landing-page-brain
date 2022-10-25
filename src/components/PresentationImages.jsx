import React from "react";

import ForestImg from "../assets/img/presentation/1.jpg";
import SkyTempleImg from "../assets/img/presentation/2.jpg";
import CrystalCaveImg from "../assets/img/presentation/3.jpg";
import SunsetFortressImg from "../assets/img/presentation/4.jpg";
import CosmicCastleImg from "../assets/img/presentation/5.jpg";
import FungiImg from "../assets/img/presentation/6.jpg";

const presentationImages = [
  { id: "1", title: "Floresta das lanternas", imgPath: ForestImg },
  { id: "2", title: "Templo nos céus", imgPath: SkyTempleImg },
  { id: "3", title: "Caverna de Cristal", imgPath: CrystalCaveImg },
  { id: "4", title: "Fortaleza do Pôr do Sol", imgPath: SunsetFortressImg },
  { id: "5", title: "Castelo Cósmico", imgPath: CosmicCastleImg },
  { id: "6", title: "Campo dos Fungos", imgPath: FungiImg },
];

const PresentationSection = () => {
  return (
    <section id="presentation-section">
      {presentationImages.map((image) => (
        <img src={image.imgPath} alt={image.title} />
      ))}
    </section>
  );
};

export default PresentationSection;
