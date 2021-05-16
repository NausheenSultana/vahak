import React from "react";
import { Formik } from "formik";
import "./styles.scss";
import BidDetails from "./BidDetails";
import JourneyDetails from "./JourneyDetails";

const FormStepFour = ({ formData, navigation, toIndianCurrency }) => {
  const { next, go } = navigation;

  return (
    <div>
      <h1 className="header">Summary and Submit Bid(4/4 step)</h1>
      <JourneyDetails formData={formData} go={go} />

      <BidDetails
        formData={formData}
        go={go}
        toIndianCurrency={toIndianCurrency}
      />
      <Formik
        initialValues={{
          bidAmount: "",
        }}
      >
        {({ isSubmitting }) => (
          <div className="form">
            <button onClick={next} className="submit">
              Submit Bid
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormStepFive;
