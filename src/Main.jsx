import React from 'react';
import ReactDOM from 'react-dom/client';
import BeginSection from './views/BeginSection';

import './styles/main.scss';
import PainSection from './views/PainSection';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <BeginSection />
    <PainSection />
  </React.Fragment>,
);
