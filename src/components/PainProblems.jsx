import React from "react";

const painProblems = [
  {
    id: 1,
    icon: "😞",
    title: "SE SENTIU INCAPAZ",
    description: `Tirava notas baixas no colégio e se achava mais burro que os colegas
    da sala.`,
  },
  {
    id: 2,
    icon: "📝",
    title: "FOI MAL EM UMA PROVA IMPORTANTE",
    description: `Não conseguiu passar no vestibular daquele curso que é o seu sonho
    de vida.`,
  },
  {
    id: 3,
    icon: "🛑",
    title: "ABANDONOU PROJETOS INCRÍVEIS",
    description: `Já ficou frustrado por não conseguir aprender habilidades que você
    sempre quis ter para dar vida àquele projeto.`,
  },
  {
    id: 4,
    icon: "👻",
    title: "NUNCA RECONHECEM SUAS HABILIDADES",
    description: `Sempre quis provar para si mesmo e para quem você ama que é capaz de
    ser incrível naquilo que faz.`,
  },
  {
    id: 5,
    icon: "🚫",
    title: "PROCRASTINA SEM QUERER",
    description: `Tem tempo de sobra para estudar mas não tem energia nem motivação
    para isso.`,
  },
  {
    id: 6,
    icon: "💩",
    title: "NUNCA TE ENSINARAM DO JEITO CERTO",
    description: `A escola nunca te ensinou como aprender a aprender, apenas te fez
    decorar por pressão.`,
  },
];

const PainProblems = () => {
  return (
    <React.Fragment>
      {painProblems.map((problem) => (
        <div id="pain-problem" key={painProblems.id}>
          <p>{problem.icon}</p>
          <p>{problem.title}</p>
          <p>{problem.description}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default PainProblems;
