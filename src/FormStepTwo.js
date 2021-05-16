import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.scss";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  bidAmount: Yup.number()
    .min(1, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
});

const FormStepTwo = ({ setForm, formData, navigation }) => {
  const { source, destination, noOfTravellers, carType } = formData;
  const { next } = navigation;
  return (
    <div>
      <h1 className="header">Place your Bid(2/4 step)</h1>
      <div>
        <h3>Journey details</h3>
        <div>
          <p>
            {source} - {destination}
          </p>
          <p>
            {noOfTravellers}/{carType}
          </p>
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
            <label htmlFor="bidAmount">Number of Travellers*</label>
            <Field
              className="bidAmount form-field"
              type="text"
              name="bidAmount"
            />
            <ErrorMessage name="noOfTravellers" component="div" />
            <button onClick={next} className="submit" disabled={isSubmitting}>
              Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormStepTwo;
