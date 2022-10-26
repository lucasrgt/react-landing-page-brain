import React from "react";

import NutritionImg from "../assets/img/modules/module-nutrition.jpg";
import HydrationImg from "../assets/img/modules/module-hydration.jpg";
import OxygenationImg from "../assets/img/modules/module-oxygenation.jpg";
import AmbientationImg from "../assets/img/modules/module-ambientation.jpg";
import MemorizationImg from "../assets/img/modules/module-memorization.jpg";

const modules = [
  {
    id: 1,
    title: "NUTRIÇÃO",
    description: `Alimentos e temperos secretos que vão turbinar o seu cérebro. Explicação aprofundada sobre vitaminas.`,
    image: NutritionImg,
  },
  {
    id: 2,
    title: "HIDRATAÇÃO",
    description: `Minerais, "elixires", como se hidratar de forma correta para ter saúde/energia para
                estudar e aprofundamento sobre um milenar conhecimento: Jejum.`,
    image: HydrationImg,
  },
  {
    id: 3,
    title: "OXIGENAÇÃO",
    description: `A importância do oxigênio para o cérebro, exercícios físicos e de respiração para fazer seu corpo e mente
                funcionarem em alto desempenho.`,
    image: OxygenationImg,
  },
  {
    id: 4,
    title: "AMBIENTAÇÃO",
    description: `Como montar o seu cantinho de estudos para você ter foco,
                concentração, paz e tudo que precisa perto de você. Você também conhecerá técnicas e suplementos para melhorar o seu sono.`,
    image: AmbientationImg,
  },
  {
    id: 5,
    title: "MEMORIZAÇÃO",
    description: `Como a memória funciona e poderosas técnicas de memorização que você nunca ouviu falar.
                Dicas para aprender idiomas, programação e para provas
                importantes, como vestibulares e concursos.`,
    image: MemorizationImg,
  },
];

const ModuleCards = () => {
  return (
    <React.Fragment>
      <div id="module-cards-container">
        {modules.map((module) => (
          <div id="module-card">
            <div id="module-img-container">
              <img src={module.image} alt={module.title} />
            </div>
            <div id="module-card-text-container">
              <div>
                <p>
                  {`MÓDULO ${module.id}`}:<br /> {module.title}
                </p>
              </div>
              <p>{module.description}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ModuleCards;
