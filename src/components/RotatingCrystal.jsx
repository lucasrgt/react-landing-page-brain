import React from "react";

import PinkCrystal from "../assets/img/gif/rotating-crystal-pink.gif";
import RedCrystal from "../assets/img/gif/rotating-crystal-red.gif";
import BlueCrystal from "../assets/img/gif/rotating-crystal-blue.gif";
import GreenCrystal from "../assets/img/gif/rotating-crystal-green.gif";
import CyanCrystal from "../assets/img/gif/rotating-crystal-cyan.gif";
import GrayCrystal from "../assets/img/gif/rotating-crystal-gray.gif";

const RotatingCrystal = ({ color = "pink" }) => {
  let imgSource;

  if (color === "pink") {
    imgSource = PinkCrystal;
  } else if (color === "red") {
    imgSource = RedCrystal;
  } else if (color === "blue") {
    imgSource = BlueCrystal;
  } else if (color === "green") {
    imgSource = GreenCrystal;
  } else if (color === "cyan") {
    imgSource = CyanCrystal;
  } else if (color === "gray") {
    imgSource = GrayCrystal;
  } else {
    imgSource = PinkCrystal;
  }
  return <img id="rotating-crystal" src={imgSource} alt={"Crystal"}></img>;
};

export default RotatingCrystal;
