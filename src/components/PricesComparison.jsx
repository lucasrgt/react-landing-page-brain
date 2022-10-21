import React from "react";

const comparisons = [
  {
    icon: "🚗",
    title: "VIAGEM DE CARRO NO APLICATIVO",
    price: "R$ 20,00",
  },
  {
    icon: "🍔",
    title: "PEDIR UM LANCHE NO APP DE DELIVERY",
    price: "R$ 70,00",
  },
  {
    icon: "🎞️",
    title: "IDA AO CINEMA COM O CRUSH",
    price: "R$ 110,00",
  },
  {
    icon: "📃",
    title: "INSCRIÇÃO DO VESTIBULAR",
    price: "R$ 200,00",
  },
  {
    icon: "🎓",
    title: "MENSALIDADE DO CURSINHO",
    price: "R$ 800,00",
  },
];

function PricesComparison() {
  return (
    <React.Fragment>
      {comparisons.map((comparison) => (
        <div id="prices-comparison">
          <div id="prices-title">
            <p>{comparison.icon}</p>
            <h2>{comparison.title}</h2>
          </div>

          <h1>{comparison.price}</h1>
        </div>
      ))}
    </React.Fragment>
  );
}

export default PricesComparison;
