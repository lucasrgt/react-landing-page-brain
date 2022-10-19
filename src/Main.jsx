import React from 'react';
import ReactDOM from 'react-dom/client';
import BeginSection from './views/BeginSection';
import PainSection from './views/PainSection';
import ForWhoSection from './views/ForWhoSection';

import './styles/main.scss';
import ModulesSection from './views/ModulesSection';

document.designMode = 'on';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
      <BeginSection />
      <PainSection />
      <ForWhoSection />
      <ModulesSection />
    </React.Fragment>
  </React.StrictMode>,
);
