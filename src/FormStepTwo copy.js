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
  const { source, destination, noOfTravellers, carType, bidAmount } = formData;
  const { next } = navigation;
  return (
    <div>
      <h1 className="header">Place your Bid(3/4 step)</h1>
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
            <Field
              className="bidAmount form-field"
              type="text"
              name="bidAmount"
              value={bidAmount}
              onChange={setFormData}
            />
            <ErrorMessage name="bidAmount" component="div" />
            {/* <input type="checkbox" name="negotiable">
              Rate Negotiable
            </input> */}
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
