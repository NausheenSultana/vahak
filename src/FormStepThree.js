import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.scss";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  bidAmount: Yup.number()
    .min(1, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
  negotiable: Yup.boolean().oneOf([true], [false]),
});

const FormStepThree = ({ setFormData, formData, navigation }) => {
  const {
    source,
    destination,
    noOfTravellers,
    carType,
    bidAmount,
    number,
    name,
    remarks,
  } = formData;
  const { next, go } = navigation;

  const toIndianCurrency = (num) => {
    num = num.toString();
    let lastThree = num.substring(num.length - 3);
    let otherNumbers = num.substring(0, num.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    let res =
      "\u20B9" + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  };

  return (
    <div>
      <h1 className="header">Place your Bid(2/4 step)</h1>
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
      <p className="bid-display">{toIndianCurrency(bidAmount)}</p>
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
            <div className="relative">
              <label htmlFor="number">Enter your 10 digits phone number*</label>
              <Field
                className="form-field"
                type="text"
                name="number"
                value={number}
                onChange={setFormData}
              />
              <ErrorMessage
                className="error-field"
                name="source"
                component="div"
              />
            </div>
            <div className="relative">
              <label htmlFor="name">Enter your Name*</label>
              <Field
                className="form-field"
                type="text"
                value={name}
                name="name"
                onChange={setFormData}
              />
              <ErrorMessage
                className="error-field"
                name="remarks"
                component="div"
              />
            </div>
            <div className="relative">
              <label htmlFor="remarks">Enter remarks (optional)</label>
              <Field
                className="form-field"
                type="text"
                value={remarks}
                name="remarks"
                onChange={setFormData}
              />
            </div>

            <button onClick={next} className="submit">
              Verify via OTP
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormStepThree;
