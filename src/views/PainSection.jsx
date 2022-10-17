import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import BuyButton from '../components/BuyButton';
import PainProblems from '../components/PainProblems';

function PainSection() {
  return (
    <React.Fragment>
      <Controller>
        <Scene
          triggerElement={'#pain-section'}
          triggerHook={0}
          duration={'200%'}
          pin={'#pain-title'}
          indicators={true}
        >
          <section id="pain-section">
            <div id="pain-title">
              <div>
                <p>QUANTAS VEZES VOCÊ JÁ PASSOU POR ISSO?</p>
                <BuyButton content="MUDAR ISSO AGORA" />
              </div>
            </div>
            <div id="pain-problems">
              <PainProblems />
            </div>
          </section>
        </Scene>
      </Controller>
    </React.Fragment>
  );
}

export default PainSection;
