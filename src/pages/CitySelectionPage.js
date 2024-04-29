import React, { useEffect, useState } from "react";
import { cops, cities } from "../data";
import Slider01 from "../assets/images/slider01.png";
import Slider02 from "../assets/images/slider02.png";
import Slider03 from "../assets/images/slider03.png";
import Slider04 from "../assets/images/slider04.png";
import Slider05 from "../assets/images/slider05.png";
import axios from "axios";

const CitySelectionPage = ({ selectedCity, setSelectedCity, setIsVehicle }) => {
  const [cities, setCities] = useState([]);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const getCities = async () => {
    axios.get("https://chor-police1.onrender.com/GET_CITYS").then((res) => {
      setCities(res.data);
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  };

  useEffect(() => {
    getCities();
  }, []);

  const citiesImg = [
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
        {cities?.length > 0 &&
          cities.map((city, index) => (
            <div
              key={index}
              className={
                selectedCity?.Name === city?.Name ? "copActive" : "cop"
              }
              onClick={() => handleCityClick(city)}
            >
              <h3>{city.Name}</h3>
              <h5>{city.Distance}</h5>
              <img
                src={citiesImg[index].img}
                alt="cityName"
                width="100%"
                height="60%"
                className="cityImg"
              />
            </div>
          ))}
      </div>
      {selectedCity?.Name && (
        <button className="start-button" onClick={() => setIsVehicle(true)}>
          Next: Choose Vehicles
        </button>
      )}
    </div>
  );
};

export default CitySelectionPage;
