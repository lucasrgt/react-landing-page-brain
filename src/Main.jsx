import React from 'react';
import ReactDOM from 'react-dom/client';
import BeginSection from './views/BeginSection';
import PainSection from './views/PainSection';
import ForWhoSection from './views/ForWhoSection';

import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
      <BeginSection />
      <PainSection />
      <ForWhoSection />
    </React.Fragment>
  </React.StrictMode>,
);
