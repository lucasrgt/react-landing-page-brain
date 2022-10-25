import React from "react";

import GreenGift from "../assets/img/gift-1.png";
import BlueGift from "../assets/img/gift-2.png";

function Gift({ giftId = 1 }) {
  let giftSrc;

  if (giftId === 1) {
    giftSrc = GreenGift;
  } else if (giftId === 2) {
    giftSrc = BlueGift;
  } else {
    giftSrc = GreenGift;
  }

  return <img id="gift-img" src={giftSrc} alt="Presente" />;
}

export default Gift;
