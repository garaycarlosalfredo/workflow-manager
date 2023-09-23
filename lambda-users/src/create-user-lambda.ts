import { partial } from "ramda";
import { userHandler } from "./user/create/create-user-handler";
import { createUser } from "./user";

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 *
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const createSignInHttpEventHandler = (config) => {
  // inject signUp AWS SDK put
  const functionInjectSignUp = (handler) => (event, context) => {
    const {
      pathParameters: { db },
    } = event;
    return handler(event, {
      ...context,
      createUser: partial(createUser, [db]),
    });
  };

  return functionInjectSignUp(userHandler);
};

export default createSignInHttpEventHandler;
