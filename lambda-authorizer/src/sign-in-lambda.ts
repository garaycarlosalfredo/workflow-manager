import { compose, partial } from "ramda";
import { signInHandler } from "./sign-in/sign-in-handler";
import { signIn } from "./auth";

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 *
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const createSignInHttpEventHandler = (config) => {
  const { jwt } = config;
  // inject signUp AWS SDK put
  const functionInjectSignUp = (handler) => (event, context) => {
    const {
      pathParameters: { db },
    } = event;
    return handler(event, {
      ...context,
      signIn: partial(signIn, [db, jwt]),
    });
  };

  return compose(functionInjectSignUp)(signInHandler);
};

export default createSignInHttpEventHandler;
