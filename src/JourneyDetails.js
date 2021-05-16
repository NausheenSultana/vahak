import React from "react";
import "./styles.scss";

const JourneyDetails = ({ formData, go }) => {
  const { source, destination, noOfTravellers, carType } = formData;
  return (
    <div className="details">
      <h3 className="journey-title">Journey details</h3>
      <span className="edit">
        <button onClick={() => go("1")}>
          <img
            src="/images/1024px-OOjs_UI_icon_edit-ltr-progressive.svg.png"
            width="30"
            height="30"
          />
        </button>
      </span>
      <div>
        <p>
          {source} - {destination}
        </p>
        <p>
          {noOfTravellers} persons, {carType}
        </p>
      </div>
    </div>
  );
};

export default JourneyDetails;
