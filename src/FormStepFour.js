import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.scss";
import * as Yup from "yup";

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

const FormStepFour = ({ setFormData, formData, navigation }) => {
  const {
    source,
    destination,
    noOfTravellers,
    carType,
    bidAmount,
    name,
    number,
    comments,
  } = formData;
  const { next, go } = navigation;
  let otp = "";
  return (
    <div>
      <h1 className="header">Place your Bid(4/4 step)</h1>
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
      <div className="details">
        <h3 className="journey-title">Bid details</h3>
        <span className="edit">
          <button onClick={() => go("3")}>
            <img
              src="/images/1024px-OOjs_UI_icon_edit-ltr-progressive.svg.png"
              width="30"
              height="30"
            />
            <p className="bid-display">{toIndianCurrency(bidAmount)}</p>
            <p>Fixed Price</p>
          </button>
        </span>
        <div>
          <p>+91-{number}</p>
          <p>{name}</p>
          <p>{comments}</p>
        </div>
      </div>
      <div className="details">
        <span>
          We've sent an OTP to your number, please enter it below and submit
          your bid {number}
          <button
            onClick={() => go("3")}
            style={{ border: "none", background: "none" }}
          >
            <img
              src="/images/1024px-OOjs_UI_icon_edit-ltr-progressive.svg.png"
              width="30"
              height="30"
            />
          </button>
          <p className="bid-display">{toIndianCurrency(bidAmount)}</p>
          <p>Fixed Price</p>
        </span>
        <div>
          <p>+91-{number}</p>
          <p>{name}</p>
          <p>{comments}</p>
        </div>
      </div>
      <Formik
        initialValues={{
          bidAmount: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
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
            <a href="#">Resend OTP again</a>
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
