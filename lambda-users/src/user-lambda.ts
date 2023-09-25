import { partial, compose } from "ramda";
import { userHandler } from "./user/get/get-user-handler";
import { querySchema, pathSchema } from "./user/get/get-user-schema";
import { getUserByPersonalId } from "./user";

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 *
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const getUserHttpEventHandler = (config) => {
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
      getUserByPersonalId: partial(getUserByPersonalId, [db]),
    });
  };

  const yupValidation = (handler) => async (event, context) => {
    // Validate de data with yup
    const { pathParameters, queryStringParameters } = event;

    try {
      await querySchema.validate(queryStringParameters);
      await pathSchema.validate(pathParameters);
      return handler(event, context);
    } catch (error) {
      // (TODO) make better yup validation errors
      return error;
    }
  };

  return compose(functionInjectSignUp, yupValidation)(userHandler);
};

export default getUserHttpEventHandler;
