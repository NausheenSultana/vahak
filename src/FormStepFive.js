import React from "react";
import { Formik } from "formik";
import "./styles.scss";
import * as Yup from "yup";
import BidDetails from "./BidDetails";
import JourneyDetails from "./JourneyDetails";

const SignupSchema = Yup.object().shape({
  otp: Yup.number()
    .min(4, "Too Short!")
    .max(4, "Too Long!")
    .required("Required"),
});
const toIndianCurrency = (num) => {
  num = num.toString();
  let lastThree = num.substring(num.length - 3);
  let otherNumbers = num.substring(0, num.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  let res =
    "\u20B9" + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return res;
};

const FormStepFour = ({ formData, navigation }) => {
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
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
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

export default FormStepFour;
