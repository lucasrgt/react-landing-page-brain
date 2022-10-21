import React from "react";

function Gift({ giftId = 1 }) {
  return (
    <img
      id="gift-img"
      src={`/src/assets/img/gift-${giftId}.png`}
      alt="Presente"
    />
  );
}

export default Gift;
