import React from 'react';
import Book from './Book';
import RotatingCrystal from './RotatingCrystal';

const ForWhoContent = () => {
  return (
    <React.Fragment>
      <div id="for-who-content">
        <div id="for-who-topics">
          <div>
            <RotatingCrystal color={'pink'} />
            <p>
              Para qualquer um que queira{' '}
              <strong>desbloquear o verdadeiro poder do seu cérebro</strong> ,
              de forma natural e prática.
            </p>
          </div>
          <div>
            <RotatingCrystal color={'green'} />
            <p>
              Estudantes de <strong>vestibular, concursos, programação </strong>
              ou qualquer outra atividade que requeira grande raciocínio.
            </p>
          </div>
          <div>
            <RotatingCrystal color={'cyan'} />
            <p>
              Ninguém é burro de verdade, alguns apenas não souberam extrair o
              <strong> verdadeiro poder do seu cérebro</strong>.
            </p>
          </div>
        </div>
        <div id="for-who-book">
          <Book color={'white'} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForWhoContent;
