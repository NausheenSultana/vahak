import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.scss";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  source: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  destination: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  noOfTravellers: Yup.number()
    .min(1, "Too Short!")
    .max(4, "Too Long!")
    .required("Required"),
  carType: Yup.string()
    .oneOf(["hatchback", "sedan", "SUV", "truck"], "Invalid Car Type")
    .required("Required"),
});

const FormStepOne = ({ setFormData, formData, navigation }) => {
  const { source, destination, noOfTravellers, carType, disabled } = formData;
  const { next } = navigation;
  return (
    <div>
      <h1 className="header">Place your Bid(1/4 step)</h1>
      <Formik
        initialValues={{
          source: "",
          destination: "",
          typeOfCar: "",
          noOfTravellers: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ submit }) => (
          <Form className="form">
            <div className="coupled-fields">
              <label className="source-label" htmlFor="source">
                Souce Location*
              </label>
              <Field
                className="form-field"
                type="text"
                name="source"
                value={source}
                onChange={setFormData}
              />
              <ErrorMessage
                className="error-field"
                name="source"
                component="div"
              />

              <label className="destination-label" htmlFor="destination">
                Destination*
              </label>
              <Field
                className="form-field"
                type="text"
                value={destination}
                name="destination"
                onChange={setFormData}
              />
              <ErrorMessage
                className="error-field"
                name="destination"
                component="div"
              />
            </div>
            <div className="relative">
              <label htmlFor="carType">Select Car Type*</label>
              <Field
                className="select"
                name="carType"
                value={carType}
                as="select"
                onChange={setFormData}
              >
                <option value="hatchback">Hatchback</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="truck">Truck</option>
              </Field>
              <ErrorMessage
                className="error-field"
                name="TypeOfCar"
                component="div"
              />
            </div>
            <div className="relative">
              <label htmlFor="noOfTravellers">Number of Travellers*</label>
              <Field
                className="form-field"
                type="text"
                value={noOfTravellers}
                name="noOfTravellers"
                onChange={setFormData}
              />
              <ErrorMessage
                className="error-field"
                name="noOfTravellers"
                component="div"
              />
            </div>
            <button onClick={next} className="submit" disabled={disabled}>
              Enter bid details
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormStepOne;
