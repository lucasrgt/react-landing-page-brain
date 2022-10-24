import React from "react";

const modules = [
  {
    id: 1,
    title: "NUTRIÇÃO",
    description: `Alimentos e temperos secretos que vão turbinar o seu cérebro. Explicação aprofundada sobre vitaminas.`,
    image: "nutrition",
  },
  {
    id: 2,
    title: "HIDRATAÇÃO",
    description: `Minerais, "elixires", como se hidratar de forma correta para ter saúde/energia para
                estudar e aprofundamento sobre um milenar conhecimento: Jejum.`,
    image: "hydration",
  },
  {
    id: 3,
    title: "OXIGENAÇÃO",
    description: `A importância do oxigênio para o cérebro, exercícios físicos e de respiração para fazer seu corpo e mente
                funcionarem em alto desempenho.`,
    image: "oxygenation",
  },
  {
    id: 4,
    title: "AMBIENTAÇÃO",
    description: `Como montar o seu cantinho de estudos para você ter foco,
                concentração, paz e tudo que precisa perto de você. Você também conhecerá técnicas e suplementos para melhorar o seu sono.`,
    image: "ambientation",
  },
  {
    id: 5,
    title: "MEMORIZAÇÃO",
    description: `Como a memória funciona e poderosas técnicas de memorização que você nunca ouviu falar.
                Dicas para aprender idiomas, programação e para provas
                importantes, como vestibulares e concursos.`,
    image: "memorization",
  },
];

const ModuleCards = () => {
  return (
    <React.Fragment>
      <div id="module-cards-container">
        {modules.map((module) => (
          <div id="module-card">
            <div id="module-img-container">
              <img
                src={`/src/assets/img/modules/module-${module.image}.jpg`}
                alt={module.title}
              />
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
        <div id="module-information">
          <div>
            <p>🍂</p>
            <h2 className="beige">+DE </h2>
            <h1>150</h1>
            <h2 className="beige">PÁGINAS</h2>
          </div>
          <div>
            <p>🧊</p>
            <h1> 5 </h1>
            <h2 className="blue">MÓDULOS</h2>
          </div>
          <div>
            <p>🧠</p>
            <h1>7</h1>
            <h2 className="pink"> ANOS DE CONHECIMENTO </h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModuleCards;
