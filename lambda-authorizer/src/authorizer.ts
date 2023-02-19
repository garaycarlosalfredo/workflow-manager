import { eventBody } from "./utils/formatters";
const { APP_ENV, APP_TEST } = process.env;

export async function authorizerHandler(event, context) {
  const dummyCheck = {
    email: "user@email",
    password: "abc123",
  };
  const inputLogin = eventBody(event);
  const isAuth = dummyCheck.email === inputLogin.email ? true : false;

  return {
    statusCode: 200,
    body: JSON.stringify({
      var: APP_TEST,
      env: APP_ENV,
      isAuth,
      message: "hello world from authorizer",
    }),
  };
}
