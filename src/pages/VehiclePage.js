import React, { useState, useEffect } from "react";
import { cops, vehicles, cities } from "../data";
import EVbike from "../assets/images/evbike.png";
import EVCar from "../assets/images/evcar.png";
import EvSuv from "../assets/images/evsuv.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VehiclePage = ({ selectedCity }) => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState(null);

  const evImages = [
    { img: EVbike, type: "EV Bike", range: 60, count: 2 },
    { img: EVCar, type: "EV Car", range: 100, count: 1 },
    { img: EvSuv, type: "EV SUV", range: 120, count: 1 },
  ];

  useEffect(() => {
    getEv();
  }, []);

  const getEv = async () => {
    axios
      .get("https://chor-police1.onrender.com/GET_VEHICLE")
      .then((res) => {
        setVehicles(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEVSelect = (vehicle) => {
    setSelectedVehicles(vehicle);
    // onVehicleSelect(vehicle);
  };

  return (
    <div className="city-selection">
      <h2>Choose a Vehicle for Each Cop</h2>

      <div className="cops-container">
        {vehicles?.map((ev, index) => (
          <div
            key={index}
            className={
              ev?.Kind === selectedVehicles?.Kind ? "copActive" : "cop"
            }
            onClick={() => handleEVSelect(ev)}
          >
            <img
              src={evImages[index].img}
              alt="cityName"
              width="100%"
              height="60%"
              className="cityImg"
            />
            <h3>
              {ev.Kind} - {ev.Range} - {ev.Count}
            </h3>
          </div>
        ))}
      </div>

      {selectedVehicles && (
        <button className="start-button" onClick={() => {
          console.log( selectedCity, selectedVehicles )
          navigate("/result", { state: {selectedCity, selectedVehicles} })
          }}>
          Next: Capture the Criminal!
        </button>
      )}
    </div>
  );
};

export default VehiclePage;
