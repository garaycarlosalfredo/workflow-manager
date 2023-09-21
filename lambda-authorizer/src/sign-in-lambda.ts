import { compose, partial } from "ramda";
import { signInHandler } from "./sign-in/sign-in-handler";
import { signIn } from "./service/auth";

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
      signIn: partial(signIn, [db]),
    });
  };

  return compose(functionInjectSignUp)(signInHandler);
};

export default createSignInHttpEventHandler;
