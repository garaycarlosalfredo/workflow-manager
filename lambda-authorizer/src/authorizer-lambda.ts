import { partial } from "ramda";
import { validationHandler } from "./sign-validation/validation-handler";
import { validation } from "./auth";

const createVerificationEventHandler = (config) => {
  const { jwt } = config;
  // inject verification auth function
  const functionInjectValidation = (handler) => (event, context) => {
    const {
      pathParameters: { db },
    } = event;
    return handler(event, {
      ...context,
      validation: partial(validation, [db, jwt]),
    });
  };

  return functionInjectValidation(validationHandler);
};

export default createVerificationEventHandler;
