import React, { useEffect, useMemo, useState } from "react";
import "./result.css";
import axios from "axios";
import { json, useLocation } from "react-router-dom";
import caught from "../../assets/images/caught.png";
import uncaught from "../../assets/images/uncaught.png";

function Result() {
  const { state } = useLocation();

  const [result, setResult] = useState({});

  const getFinalResult = async () => {
    const payload = {
      copCity: state?.selectedCity.Name,
      copVehicle: state?.selectedVehicles.Kind,
    };

    axios
      .post("https://chor-police1.onrender.com/CAPTURE_FUGITIVE", payload)
      .then((res) => {
        // setVehicles(res.data);
        console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useMemo(() => {
    getFinalResult();
  }, []);

  return (
    <div className="gameWrap">
      <h2 className="citytext">Capture Result</h2>
      {Object.keys(result).length > 0 && result?.success ? (
        <div className="cardContainer">
            <img
                width="24"
                height="24"
                src="https://img.icons8.com/3d-fluency/94/ok.png"
                alt="ok"
                className="icon"
              />
          <img width="154" height="154" src={caught} alt="caught" />

          <div className="cardWrap">
            <div>
              <h3>Capured in city - {state?.selectedCity.Name}</h3>
              <h3>Capured by - {result?.copName}</h3>
            </div>

            <div>
            
              <h3>Status - Capured Succesfully</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="wrongCard">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/3d-fluency/94/cancel.png"
            alt="cancel"
            className="icon"
          />
          <div className="wrongImg">
           <img width="254" height="154" src={uncaught} alt="caught" />
           </div>
          <h3>Sorry, fugutive not captured</h3>
        </div>
      )}
    </div>
  );
}

export default Result;
