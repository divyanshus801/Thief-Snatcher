import React, { useState } from "react";
import { cops, cities } from "../data";
import Slider01 from "../assets/images/slider01.png";
import Slider02 from "../assets/images/slider02.png";
import Slider03 from "../assets/images/slider03.png";
import Slider04 from "../assets/images/slider04.png";
import Slider05 from "../assets/images/slider05.png";

const CitySelectionPage = ({ selectedCity, setSelectedCity, setIsVehicle }) => {
  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const cities = [
    { name: "Yapkashnagar", distance: 60, img: Slider01 },
    { name: "Lihaspur", distance: 50, img: Slider02 },
    { name: "Narmis City", distance: 40, img: Slider03 },
    { name: "Shekharvati", distance: 30, img: Slider04 },
    { name: "Nuravgram", distance: 20, img: Slider05 },
  ];

  return (
    <div className="city-selection">
      <h2 className="citytext">Choose a city</h2>
      <div className="cops-city-container">
        {cities.map((city, index) => (
          <div
            key={index}
            className={selectedCity?.name === city?.name ? "copActive" : "cop"}
            onClick={() => handleCityClick(city)}
          >
            <h3>{city.name}</h3>
            <h5>{city.distance}</h5>
            <img
              src={city.img}
              alt="cityName"
              width="100%"
              height="60%"
              className="cityImg"
            />
          </div>
        ))}
      </div>
      {selectedCity?.name && (
        <button className="start-button" onClick={() => setIsVehicle(true)}>
          Next: Choose Vehicles
        </button>
      )}
    </div>
  );
};

export default CitySelectionPage;
