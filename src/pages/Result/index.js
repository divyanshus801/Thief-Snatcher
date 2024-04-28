import React from "react";
import "./result.css"

function Result() {
  const finalResult = {
    cityName: "Test city",
    cop: "cop1",
  };

  return (
    <div className="gameWrap">
      <h2 className="citytext">Capture Result</h2>
      <div className="cardWrap">
        <div>
        <h3>Capured in city -{finalResult?.cityName}</h3>
        <h3>Capured by  - {finalResult?.cop}</h3>
        </div>
        <div>
            <h3>Status - Capured</h3>
        </div>
      </div>
    </div>
  );
}

export default Result;
