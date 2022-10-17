import React from 'react';
import VoxelBrain from './VoxelBrain';

const BeginContent = () => {
  return (
    <React.Fragment>
      <div id="begin-content">
        <div id="begin-title">
          <p>ENCICLOPÉDIA</p>
          <p>
            <span>DO</span> CÉREBRO++
          </p>
          <p id="begin-subtitle">Desbloqueie a sua verdadeira inteligência.</p>
        </div>
        <div id="begin-img-container">
          <VoxelBrain />
        </div>
      </div>
    </React.Fragment>
  );
};

export default BeginContent;
