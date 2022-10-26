import React from "react";

const depositions = [
  {
    avatar: "avatar",
    text: "Esse livro é incrível, ameiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    avatar: "avatar2",
    text: "Nunca achei um conteúdo igual assim",
  },
  {
    avatar: "avatar3",
    text: "Namoral esse livro é foda pra krl gostei demais",
  },
  {
    avatar: "avatar4",
    text: "Muito bom",
  },
  {
    avatar: "avatar5",
    text: "Sensacional apenas",
  },
  {
    avatar: "avatar6",
    text: "Nem sei o que dizer",
  },
];

const DepositionsCards = () => {
  return (
    <div id="depositions-cards-container">
      {depositions.map((depositions) => (
        <div id="depositions-card">
          <p>{depositions.text}</p>
          <p>{depositions.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DepositionsCards;
