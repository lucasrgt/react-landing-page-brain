import React from "react";
import RotatingCrystal from "../components/RotatingCrystal.jsx";

const MissionSection = () => {
  return (
    <section id="mission-section">
      <p id="mission-title">MINHA MISSÃO</p>
      <div id="mission-author">
        <div id="mission-caption">
          <div id="mission-topic">
            <RotatingCrystal color={"blue"} />
            <p>
              Quando eu idealizei esse livro, eu quis deixar a minha marca como
              ser humano no mundo.{" "}
              <span>Algo que melhorasse a vida das pessoas</span>.
            </p>
          </div>
          <div id="mission-topic">
            <RotatingCrystal color={"gray"} />
            <p>
              Não sou nem de longe uma das pessoas mais inteligentes do planeta,
              mas com a minha dedicação em estudar neurologia e nutrição,
              descobri como aumentar o potencial que já existia dentro de mim e
              que
              <span> existe em todas as pessoas</span>.
            </p>
          </div>
          <div id="mission-topic">
            <RotatingCrystal color={"gray"} />
            <p>
              Algo que realmente auxiliasse elas a conseguirem conquistar os
              seus sonhos e aprender o que quiserem sem se submeterem a cursos
              caros, ou seja, um ponto de partida para acabar com o auto
              julgamento de se acharem burras.
            </p>
          </div>
          <div id="mission-topic">
            <RotatingCrystal color={"blue"} />
            <p>
              O ser humano é incrível e
              <span> todos tem uma inteligência única</span> dentro de si, algo
              que deve ser descoberto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
