import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.scss";
import MultiStepForm from "./MultiStepForm";
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
  const { source, destination, noOfTravellers, carType } = formData;
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
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div>
              <label htmlFor="source">Souce Location*</label>
              <Field
                className="form-field"
                type="text"
                name="source"
                value={source}
                onChange={setFormData}
              />
              <ErrorMessage name="source" component="div" />

              <label htmlFor="destination">Destination*</label>
              <Field
                className="form-field"
                type="text"
                value={destination}
                name="destination"
                onChange={setFormData}
              />
              <ErrorMessage name="destination" component="div" />
            </div>
            <label htmlFor="carType">Select Car Type*</label>
            <Field
              className="select"
              name="carType"
              value={carType}
              as="select"
              onChange={setFormData}
            >
              <option value="red">Hatchback</option>
              <option value="green">Sedan</option>
              <option value="blue">SUV</option>
              <option value="blue">Truck</option>
            </Field>
            <ErrorMessage name="TypeOfCar" component="div" />

            <label htmlFor="noOfTravellers">Number of Travellers*</label>
            <Field
              className="form-field"
              type="text"
              value={noOfTravellers}
              name="noOfTravellers"
              onChange={setFormData}
            />
            <ErrorMessage name="noOfTravellers" component="div" />

            <button onClick={next} className="submit" disabled={isSubmitting}>
              Enter bid details
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormStepOne;
