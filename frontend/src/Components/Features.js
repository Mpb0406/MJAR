import React from "react";
import dayIcon from "../img/dayIcon.png";
import weekIcon from "../img/weekIcon.png";
import blockIcon from "../img/blockIcon.png";

const Features = () => {
  return (
    <div>
      <h1 className="text-light features-text text-center my-5">Features</h1>

      <div id="track-lifts" className="features-container bg-primary m-auto">
        <h2 className="bg-none text-light text-center py-4">
          Track Your Lifts By:
        </h2>
        <div className="icons-wrapper bg-none d-flex align-items-center justify-content-around mt-5">
          <div className="icon bg-none d-flex flex-column align-items-center">
            <img src={dayIcon} className="bg-none icon" alt="" />
            <h3 className="bg-none text-light my-3">Day</h3>
          </div>
          <div className="icon bg-none d-flex flex-column align-items-center">
            <img src={weekIcon} className="bg-none icon" alt="" />
            <h3 className="bg-none text-light my-3">Week</h3>
          </div>
          <div className="icon bg-none d-flex flex-column align-items-center">
            <img src={blockIcon} className="bg-none icon" alt="" />
            <h3 className="bg-none text-light my-3">Block</h3>
          </div>
        </div>
      </div>

      <div id="rpe-scale" className="rpe-container bg-primary m-auto mt-5">
        <h2 className="bg-none text-center text-light">
          RPE (Rate of Perceived Exertion)
        </h2>
      </div>
    </div>
  );
};

export default Features;
