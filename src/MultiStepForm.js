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
  disabled: false,
};

const MultiStepForm = (_) => {
  const [formData, setFormData] = useForm(defaultData);

  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const toIndianCurrency = (num) => {
    num = num.toString();
    let lastThree = num.substring(num.length - 3);
    let otherNumbers = num.substring(0, num.length - 3);
    if (otherNumbers !== "") lastThree = "," + lastThree;
    let res =
      "\u20B9" + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  };

  const props = { formData, setFormData, navigation, toIndianCurrency };

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
