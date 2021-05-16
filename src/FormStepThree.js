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
  const { next } = navigation;
  return (
    <div>
      <h1 className="header">Place your Bid(2/4 step)</h1>
      <div className="details">
        <h3>Journey details</h3>
        <div>
          <p>
            {source} - {destination}
          </p>
          <p>
            {noOfTravellers}/{carType}
          </p>
          <p>{bidAmount}</p>
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
            <label htmlFor="remarks">Enter remarks (optional)</label>
            <Field
              className="form-field"
              type="text"
              value={remarks}
              name="remarks"
              onChange={setFormData}
            />
            <ErrorMessage
              className="error-field"
              name="destination"
              component="div"
            />
            <label>
              <Field type="checkbox" name="negotiable" value="negotiable" />
              Rate Negotiable
            </label>

            <button onClick={next} className="submit">
              Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormStepThree;
