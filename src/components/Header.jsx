import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <React.Fragment>
      <header id="header">
        <Logo />
        <ul>
          <li>
            <a href="#modules-section">O que você aprenderá</a>
          </li>
          {/*<li>*/}
          {/*  <a href="#">Depoimentos</a>*/}
          {/*</li>*/}
          <li>
            <a href="#author-section">Sobre o autor</a>
          </li>
          <li>
            <a href="#faq-section">FAQ</a>
          </li>
        </ul>
      </header>
    </React.Fragment>
  );
};

export default Header;
