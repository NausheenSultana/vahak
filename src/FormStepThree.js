import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.scss";
import * as Yup from "yup";
import JourneyDetails from "./JourneyDetails";

const SignupSchema = Yup.object().shape({
  number: Yup.number()
    .min(1, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
  negotiable: Yup.boolean().oneOf([true], [false]),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  remarks: Yup.string().min(2, "Too Short!").max(100, "Too Long!"),
});

const FormStepThree = ({
  setFormData,
  formData,
  navigation,
  toIndianCurrency,
}) => {
  const { bidAmount, number, name, remarks } = formData;
  const { next, go } = navigation;

  return (
    <div>
      <h1 className="header">Place your Bid(2/4 step)</h1>
      <JourneyDetails formData={formData} go={go} />
      <div className="form">
        <p className="bid-display">{toIndianCurrency(bidAmount)}</p>
      </div>
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
