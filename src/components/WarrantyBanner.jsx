import React from "react";

import WarrantyImg from "../assets/img/warranty.png";

const WarrantyBanner = () => {
  return (
    <div id="warranty-banner">
      <div className="rainbow-separator"></div>
      <div>
        <img src={WarrantyImg} alt="Garantia" />
      </div>

      <p>
        Você tem 7 dias para experimentar o material, caso você não goste,
        poderá pegar seu dinheiro de volta sem precisar se justificar. Sem
        burocracia.
      </p>
      <div className="rainbow-separator"></div>
    </div>
  );
};

export default WarrantyBanner;
