import React, { useState } from "react";
import CitySelectionPage from "./CitySelectionPage";
import VehiclePage from "./VehiclePage";
import "./style.css";

function Index() {
  const [isGameStart, setIsGameStart] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isVehicle, setIsVehicle] = useState(false);

  return (
    <div className="gameWrap">
      {!isGameStart & !isVehicle & !isVehicle ? (
        <CitySelectionPage
          setIsGameStart={setIsGameStart}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          setIsVehicle={setIsVehicle}
        />
      ) : (
        <VehiclePage setIsVehicle={setIsVehicle} selectedCity={selectedCity} />
      )}
    </div>
  );
}

export default Index;
