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

const FormStepTwo = ({ setFormData, formData, navigation }) => {
  const { source, destination, noOfTravellers, carType, bidAmount } = formData;
  const { next, go } = navigation;
  return (
    <div>
      <h1 className="header">Place your Bid(2/4 step)</h1>
      <div>
        <div className="details">
          <h3 className="journey-title">Journey details</h3>
          <span className="edit">
            <button onClick={() => go("1")}>
              <img
                src="/images/1024px-OOjs_UI_icon_edit-ltr-progressive.svg.png"
                alt="edit"
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
                <Field
                  className="bidAmount form-field"
                  type="number"
                  name="bidAmount"
                  value={bidAmount}
                  onChange={setFormData}
                  placeholder="0"
                />
                <ErrorMessage
                  name="bidAmount"
                  component="div"
                  className="error-field"
                />
              </div>
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
    </div>
  );
};

export default FormStepTwo;
