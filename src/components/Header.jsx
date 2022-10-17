import React from 'react';
import BuyButton from './BuyButton';
import Logo from './Logo';

const Header = () => {
  return (
    <React.Fragment>
      <header id="header">
        <Logo />
        <ul>
          <li>
            <a href="#">O que você aprenderá</a>
          </li>
          <li>
            <a href="#">Depoimentos</a>
          </li>
          <li>
            <a href="#">Sobre o autor</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <BuyButton content="COMEÇAR AGORA" />
      </header>
    </React.Fragment>
  );
};

export default Header;
