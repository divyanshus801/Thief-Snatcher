import React from "react";
import "./index.css";
import cop from "../../assets/images/cop01.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
const navigate = useNavigate()

  return (
    <div className="mainWrap">
      <div className="headerWrap">
        <div className="logo">Thief Snatcher</div>
        <div className="menuWrap">
          <div>Home</div>
          <div>about</div>
        </div>
      </div>

      <div className="heroWrap">
        <div className="textWrap">
          <div className="text1">
            Beautiful game,
            {"\n"} Intense Reality
          </div>
          <div className="text2">
            Best cop snatching game with high quality graphics and intense
            reality
          </div>
          <button className="start-button" onClick={()=> navigate("/game")} >
            Start Game
          </button>
        </div>
        {/* <div>
          <div>
            <img
              src={cop}
              alt="cop"
              width="600"
              height="300"
              className="copImg"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HomePage;
