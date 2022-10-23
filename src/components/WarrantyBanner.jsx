import React from "react";

const WarrantyBanner = () => {
  return (
    <div id="warranty-banner">
      <div className="rainbow-separator"></div>
      <div>
        <img src="/src/assets/img/warranty.png" alt="Garantia" />
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
