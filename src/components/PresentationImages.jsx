import React from "react";

const presentationImages = [
  { id: "1", title: "Floresta das lanternas" },
  { id: "2", title: "Templo nos céus" },
  { id: "3", title: "Caverna de Cristal" },
  { id: "4", title: "Fortaleza do Pôr do Sol" },
  { id: "5", title: "Castelo Cósmico" },
  { id: "6", title: "Campo dos Fungos" },
];

const PresentationSection = () => {
  return (
    <section id="presentation-section">
      {presentationImages.map((image) => (
        <img
          src={`/src/assets/img/presentation/${image.id}.jpg`}
          alt={image.title}
        />
      ))}
    </section>
  );
};

export default PresentationSection;
