import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFour from "./FormStepFour";
import FormStepFive from "./FormStepFive";

import "./styles.scss";

const steps = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
const defaultData = {
  source: "",
  destination: "",
  carType: "Hatchback",
  noOfTravellers: "",
  bidAmount: "",
  number: "",
  name: "",
  remarks: "",
};
const MultiStepForm = ({ images }) => {
  const [formData, setFormData] = useForm(defaultData);

  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setFormData, navigation };

  switch (id) {
    case "1":
      return <FormStepOne {...props} />;
    case "2":
      return <FormStepTwo {...props} />;
    case "3":
      return <FormStepThree {...props} />;
    case "4":
      return <FormStepFour {...props} />;
    case "5":
      return <FormStepFive {...props} />;
    default:
      return <FormStepOne {...props} />;
  }
};

export default MultiStepForm;
