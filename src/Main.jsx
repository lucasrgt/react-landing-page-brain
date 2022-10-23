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

import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Fragment>
      <BeginSection />
      <PainSection />
      <ForWhoSection />
      <ModulesSection />
      <MethodSection />
      <PresentationSection />
      <BonusSection />
      <PaymentSection />
      <AuthorSection />
    </React.Fragment>
  </React.StrictMode>
);
