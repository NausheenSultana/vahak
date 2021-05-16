import React from "react";
import "./styles.scss";

const BidDetails = ({ formData, go, toIndianCurrency }) => {
  const { bidAmount, name, number, remarks } = formData;
  return (
    <div className="bid-details">
      <span className="edit">
        <button onClick={() => go("3")}>
          <img
            src="/images/1024px-OOjs_UI_icon_edit-ltr-progressive.svg.png"
            width="30"
            height="30"
          />
          <p>{toIndianCurrency(bidAmount)}</p>
          <p>Fixed Price</p>
        </button>
      </span>
      <div>
        <h3 className="journey-title">Bid details</h3>
        <p>+91-{number}</p>
        <p>{name}</p>
        <p>{remarks}</p>
      </div>
    </div>
  );
};

export default BidDetails;
