import { partial, compose } from "ramda";
import { userHandler } from "./user/create/create-user-handler";
import { userSchema, pathSchema } from "./user/create/create-user-Schema";
import { createUser } from "./user";

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 *
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const createSignInHttpEventHandler = (config) => {
  const {
    database: { supportedDatabase },
  } = config;
  // inject required functions and data to the context
  const functionInjectSignUp = (handler) => (event, context) => {
    const {
      pathParameters: { db },
    } = event;
    return handler(event, {
      ...context,
      createUser: partial(createUser, [db]),
    });
  };

  const yupValidation = (handler) => async (event, context) => {
    // Validate de data with yup
    const { body, pathParameters } = event;

    const user = JSON.parse(body);
    try {
      await userSchema.validate(user);
      await pathSchema.validate(pathParameters);
      return handler(event, context);
    } catch (error) {
      // (TODO) make better yup validation errors
      return error;
    }
  };

  return compose(functionInjectSignUp, yupValidation)(userHandler);
};

export default createSignInHttpEventHandler;
