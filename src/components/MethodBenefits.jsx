import React from "react";

const benefits = [
  {
    title: `LINGUAGEM INTUITIVA E AMIGÁVEL`,
    description: `Todo o conteúdo desse livro foi criado com muito esforço, carinho
              e compreensão para com o leitor. Ao decorrer do livro, vários
              assuntos complexos são abordados de maneira aprofundada, porém de
              entendimento simples e mastigado.`,
    icon: "🥸🗯",
  },
  {
    title: `MUITAS ILUSTRAÇÕES E DESENHOS`,
    description: `Todas as ilustrações do livro foram criadas pelo autor, com
              objetivo de tornar a leitura divertida, dinâmica, fácil e sem
              enjoar.`,
    icon: "🎨",
  },
  {
    title: `MÃO NA MASSA!`,
    description: `Você aprenderá técnicas que poderá aplicar no mesmo dia se quiser.
              Mesmo riquíssimo em conteúdo, o livro possui a leitura rápida,
              muito imersiva e foca na PRÁTICA!`,
    icon: "💪",
  },
];

const MethodBenefits = ({ title, description }) => {
  return (
    <React.Fragment>
      {benefits.map((benefit) => (
        <div id="method-card">
          <div id="method-card-title">
            <h2>{benefit.icon}</h2>
            <h1>{benefit.title}</h1>
          </div>
          <p>{benefit.description}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default MethodBenefits;
