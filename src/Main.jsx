import React from "react";
import ReactDOM from "react-dom/client";
import BeginSection from "./views/BeginSection";
import PainSection from "./views/PainSection";
import ForWhoSection from "./views/ForWhoSection";

import "./styles/main.scss";
import ModulesSection from "./views/ModulesSection";
import MethodSection from "./views/MethodSection.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Fragment>
      <BeginSection />
      <PainSection />
      <ForWhoSection />
      <ModulesSection />
      <MethodSection />
    </React.Fragment>
  </React.StrictMode>
);
