import React from "react";
import Collapsible from "react-collapsible";

const questions = [
  {
    title: "MINHA COMPRA É SEGURA? ▾",
    description:
      "A plataforma Hotmart, uma das maiores do mercado irá cuidar de toda a etapa de pagamento, tornando-a segura, fácil e rápida!",
  },
  {
    title: "POR QUANTO TEMPO TEREI ACESSO AO LIVRO? ▾",
    description:
      "Você terá acesso vitalício ao livro, ou seja, ele é seu presente para o resto da vida!",
  },
  {
    title: "COMO POSSO TER ACESSO AO LIVRO + BÔNUS? ▾",
    description:
      "Através da compra pela Hotmart, você receberá um link no seu e-mail com acesso para o download do material! Caso não receba o link, você poderá fazer o login na sua conta Hotmart que utilizou para comprar o livro e encontrá-lo nas suas compras!",
  },
  {
    title:
      "VOCÊ REALMENTE DEVOLVE O MEU DINHEIRO CASO EU NÃO GOSTE DO MATERIAL? ▾",
    description:
      "Fique tranquilo, se você não gostar, poderá pedir reembolso em um prazo máximo de até 7 dias corridos após a compra e seu dinheiro será devolvido sem desculpas/justificativas. Mas o conteúdo é tão bacana que acho muito difícil você não gostar! Tudo foi pensado com muito carinho para você ter a melhor experiência possível!",
  },
  {
    title: "EU VOU DEMORAR PARA TER RESULTADOS? ▾",
    description:
      " O livro, apesar de ser bastante abrangente em conteúdo, possui muitas coisas que você poderá aplicar no mesmo dia que ler! Tudo dependerá da sua dedicação e força de vontade em aplicar o conteúdo na sua nova jornada! É uma honra poder te ajudar nesse processo!",
  },
];

const FaqSection = ({ children }) => {
  return (
    <section id="faq-section">
      <div id="faq-title">
        <p>PERGUNTAS FREQUENTES</p>
        <p>
          <span> (CLIQUE NOS ITENS PARA AMPLIAR)</span>
        </p>
      </div>

      <div id="questions">
        {questions.map((question) => (
          <Collapsible
            classParentString={"question-button"}
            trigger={question.title}
          >
            <p>{question.description}</p>
          </Collapsible>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
