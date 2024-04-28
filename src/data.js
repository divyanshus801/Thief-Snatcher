import Slider01 from "./assets/images/slider01.png";
import Slider02 from "./assets/images/slider02.png";
import Slider03 from "./assets/images/slider03.png";
import Slider04 from "./assets/images/slider04.png";
import Slider05 from "./assets/images/slider05.png";
import Cop01 from "./assets/images/cop01.png";
import Cop02 from "./assets/images/cop02.png";
import Cop03 from "./assets/images/cop03.png";
import EVbike from "./assets/images/evbike.png";
import EVCar from "./assets/images/evcar.png";
import EvSuv from "./assets/images/evsuv.png";

export const homeSlider = [
  { img: Slider01, bgColor: "#b76972" },
  { img: Slider02, bgColor: "#344957" },
  { img: Slider03, bgColor: "#3f302c" },
  { img: Slider04, bgColor: "#765613" },
  { img: Slider05, bgColor: "#9b969d" },
];

export const cops = [
  {
    img: Cop01,
    name: "Cop 1",
    description: "Expert in locating criminals on the run.",
  },
  {
    img: Cop02,
    name: "Cop 2",
    description: "Brilliant mind for planning the perfect capture.",
  },
  {
    img: Cop03,
    name: "Cop 3",
    description: "Unmatched speed to chase down the fugitive.",
  },
];

export const cities = [
  { name: "Yapkashnagar", distance: 60 },
  { name: "Lihaspur", distance: 50 },
  { name: "Narmis City", distance: 40 },
  { name: "Shekharvati", distance: 30 },
  { name: "Nuravgram", distance: 20 },
];

export const vehicles = [
  { img: EVbike, type: "EV Bike", range: 60, count: 2 },
  { img: EVCar, type: "EV Car", range: 100, count: 1 },
  { img: EvSuv, type: "EV SUV", range: 120, count: 1 },
];
