import React from "react";

const comparisons = [
  {
    icon: "car",
    title: "VIAGEM DE CARRO NO APLICATIVO",
    price: "R$ 20,00",
  },
  {
    icon: "lunch",
    title: "PEDIR UM LANCHE NO APP DE DELIVERY",
    price: "R$ 70,00",
  },
  {
    icon: "cinema",
    title: "IDA AO CINEMA COM O CRUSH",
    price: "R$ 110,00",
  },
  {
    icon: "vestibular",
    title: "INSCRIÇÃO DO VESTIBULAR",
    price: "R$ 200,00",
  },
  {
    icon: "car",
    title: "MENSALIDADE DO CURSINHO",
    price: "R$ 800,00",
  },
];

function PricesComparison() {
  return (
    <React.Fragment>
      {comparisons.map((comparison) => (
        <div id="prices-comparison">
          <img
            src={`src/assets/img/prices/${comparison.icon}.png`}
            alt="Icon"
          />
          <p>{comparison.title}</p>
          <h1>{comparison.price}</h1>
        </div>
      ))}
    </React.Fragment>
  );
}

export default PricesComparison;
