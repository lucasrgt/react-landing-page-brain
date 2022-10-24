import React from "react";

const AuthorSection = () => {
  return (
    <section id="author-section">
      <p id="author-title">SOBRE O AUTOR</p>
      <div id="about-author">
        <div id="author-caption">
          <p>
            Olá, meu nome é <span>Lucas Tinoco</span>, tenho 21 anos e trabalho
            como <span>Designer e Programador Mobile/Web</span>. Estudo desde os
            14 anos de idade técnicas de como aprender melhor as coisas que eu
            levava como diversão e brincadeira na época (como modelar
            bonequinhos 3D do Minecraft no computador) e também assuntos mais
            sérios como neurologia e nutrição!
          </p>
          <p>
            Como um autodidata, essa paixão e sede pelo aprendizado nutriu um
            sonho, compartilhar com as pessoas o desejo de aprenderem as coisas
            que sempre quiseram,{" "}
            <span>
              algo que dê felicidade à suas vidas, não importa o que seja
            </span>
            .
          </p>
          <p>
            O bem mais valioso é o <span>conhecimento</span>, este te
            acompanhará pela eternidade de sua existência.{" "}
            <span>Ninguém o tirará de você</span>.
          </p>
        </div>
        <div id="author-image">
          <img src="/src/assets/img/lucas2.png" alt="Lucas Tinoco" />
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
