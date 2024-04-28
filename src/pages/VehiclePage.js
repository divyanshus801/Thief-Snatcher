import React, { useState, useEffect } from "react";
import { cops, vehicles, cities } from "../data";
import EVbike from "../assets/images/evbike.png";
import EVCar from "../assets/images/evcar.png";
import EvSuv from "../assets/images/evsuv.png";
import { useNavigate } from "react-router-dom";

const VehiclePage = () => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([
    { img: EVbike, type: "EV Bike", range: 60, count: 2 },
    { img: EVCar, type: "EV Car", range: 100, count: 1 },
    { img: EvSuv, type: "EV SUV", range: 120, count: 1 },
  ]);
  const [selectedVehicles, setSelectedVehicles] = useState(null);

  // useEffect(() => {
  //   // setCitieDistance(
  //   //   cities?.reduce((acc, city) => ({ ...acc, [city.name]: city.distance }), {})
  //   // );
  //   setVehicles(vehicles);
  // }, []);

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
              ev?.type === selectedVehicles?.type ? "copActive" : "cop"
            }
            onClick={() => handleEVSelect(ev)}
          >
            <img
              src={ev.img}
              alt="cityName"
              width="100%"
              height="60%"
              className="cityImg"
            />
            <h3>
              {ev.type} - {ev.range} - {ev.count}
            </h3>
          </div>
        ))}
      </div>

      {selectedVehicles && (
        <button className="start-button" onClick={() => navigate("/result")}>
          Next: Capture the Criminal!
        </button>
      )}
    </div>
  );
};

export default VehiclePage;
