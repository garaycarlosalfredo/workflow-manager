import { compose, partial } from "ramda";
import { signUpHandler } from "./sign-up/sign-up-handler";
import { signUp } from "./auth";

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

  return compose(functionInjectSignUp)(signUpHandler);
};

export default createSignUpHttpEventHandler;
