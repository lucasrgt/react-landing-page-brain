import React from "react";
import MethodBenefit from "../components/MethodBenefit.jsx";

const methods = [
  {
    title: `LINGUAGEM INTUITIVA E AMIGÁVEL`,
    description: `Todo o conteúdo desse livro foi criado com muito esforço, carinho e
            compreensão para com o leitor. Ao decorrer do livro, vários assuntos
            complexos são abordados de maneira aprofundada, porém de
            entendimento simples e mastigado, com uma experiência muito imersiva, diferente de tudo que você já viu!.`,
  },
  {
    title: `MUITAS ILUSTRAÇÕES E DESENHOS`,
    description: `Todas as ilustrações do livro foram criadas pelo autor, com objetivo
            de tornar a leitura divertida, dinâmica, fácil e sem enjoar!`,
  },
  {
    title: `MÃO NA MASSA!`,
    description: `Você aprenderá técnicas que poderá aplicar no mesmo dia se
            quiser. Mesmo riquíssimo em conteúdo, o livro possui a leitura
            rápida e foca na PRÁTICA!`,
  },
];

const MethodSection = () => {
  return (
    <React.Fragment>
      <div id="method-title-container">
        <p>CONHEÇA O MÉTODO DE ENSINO</p>
      </div>
      <section id="method-section">
        {methods.map((method) => (
          <MethodBenefit
            title={method.title}
            description={method.description}
          />
        ))}
      </section>
    </React.Fragment>
  );
};

export default MethodSection;
