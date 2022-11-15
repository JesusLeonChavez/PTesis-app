import * as yup from "yup";

import { SecondStepFormValues } from "components/SecondStep/SecondStep.types";
import { FormShape } from "interfaces/common.types";

export const validationMessages = {
  required: "Este campo es requerido"
};

const { required } = validationMessages;

export const validationRules = {
  requiredString: yup.string().required(required),
  requiredBoolean: yup.bool().oneOf([true], required)
};

const { requiredString, requiredBoolean } = validationRules;

export const secondStepSchema = yup
  .object()
  .shape<FormShape<SecondStepFormValues>>({
    name: requiredString,
    lastname: requiredString,
    terms: requiredBoolean
  });
