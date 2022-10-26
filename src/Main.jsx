import React from "react";
import ReactDOM from "react-dom/client";
import BeginSection from "./views/BeginSection";
import PainSection from "./views/PainSection";
import ForWhoSection from "./views/ForWhoSection";
import ModulesSection from "./views/ModulesSection";
import MethodSection from "./views/MethodSection.jsx";
import PresentationSection from "./views/PresentationSection.jsx";
import BonusSection from "./views/BonusSection.jsx";
import PaymentSection from "./views/PaymentSection.jsx";
import AuthorSection from "./views/AuthorSection.jsx";
import MissionSection from "./views/MissionSection.jsx";
import FaqSection from "./views/FaqSection.jsx";
import DecisionSection from "./views/DecisionSection.jsx";

import "./styles/main.scss";

import ReactGA from "react-ga";

const TRACKING_ID = "UA-246866012-1";
ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Fragment>
      <BeginSection />
      <PainSection />
      <ForWhoSection />
      <ModulesSection />
      <MethodSection />
      <PresentationSection />
      {/*<DepositionsSection />*/}
      <BonusSection />
      <PaymentSection />
      <FaqSection />
      <AuthorSection />
      <MissionSection />
      <DecisionSection />
    </React.Fragment>
  </React.StrictMode>
);
