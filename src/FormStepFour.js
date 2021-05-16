import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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

const FormStepFour = ({ formData, navigation, toIndianCurrency }) => {
  const { number } = formData;
  const { next, go } = navigation;
  let otp = "";
  return (
    <div>
      <h1 className="header">Place your Bid(4/4 step)</h1>
      <JourneyDetails formData={formData} go={go} />
      <BidDetails
        formData={formData}
        go={go}
        toIndianCurrency={toIndianCurrency}
      />
      <div className="details">
        <span>
          We've sent an OTP to your number, please enter it below and submit
          your bid {number} &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => go("3")}
            style={{ border: "none", background: "none" }}
          >
            <img
              src="/images/1024px-OOjs_UI_icon_edit-ltr-progressive.svg.png"
              width="30"
              height="30"
              alt="edit"
            />
          </button>
        </span>
      </div>
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
          <Form className="form">
            <Field
              className="otp form-field"
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => (otp = e.value)}
            />
            <ErrorMessage name="otp" component="div" />
            <a href="#<">Resend OTP again</a>
            <button onClick={next} className="submit">
              Verify via OTP
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormStepFour;
