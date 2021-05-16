import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.scss";
import MultiStepForm from "./MultiStepForm";

const StepForm = () => (
  <div>
    <h1 className="header">Place your Bid!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <div>
            <label htmlFor="email">Souce Location*</label>
            <Field className="form-field" type="text" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="email">Destination*</label>
            <Field className="form-field" type="text" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <label htmlFor="email">Select Car Type*</label>
          <Field className="form-field" name="colors" as="select">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <ErrorMessage name="email" component="div" />

          <label htmlFor="email">Number of Travellers*</label>
          <Field className="form-field" type="text" name="email" />
          <ErrorMessage name="email" component="div" />

          <button type="submit" className="submit" disabled={isSubmitting}>
            Enter bid details
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default StepForm;
