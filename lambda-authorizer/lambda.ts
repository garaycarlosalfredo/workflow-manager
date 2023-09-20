/**
 * AWS λ lambda user service
 * This lambda contents all the handlers to interact with users table.
 *
 * @module lambda-authorizer
 */

import createSignUpHttpEventHandler from "./src/sign-up-lambda";
import config from "./src/config/config";

const handleHttpSignUp = createSignUpHttpEventHandler(config);

export { handleHttpSignUp };
