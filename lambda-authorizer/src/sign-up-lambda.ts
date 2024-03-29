import { partial } from "ramda";
import { signUpHandler } from "./sign-up/sign-up-handler";
import { signUp } from "./auth";

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 *
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const createSignUpHttpEventHandler = (config) => {
  // inject signUp AWS SDK put
  const functionInjectSignUp = (handler) => (event, context) => {
    const {
      pathParameters: { db },
    } = event;
    return handler(event, {
      ...context,
      signUp: partial(signUp, [db]),
    });
  };

  return functionInjectSignUp(signUpHandler);
};

export default createSignUpHttpEventHandler;
