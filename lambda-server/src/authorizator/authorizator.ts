const { postRequest } = require("../service/axios.ts");
const { URL_AUTH } = process.env;

/**
 * signIn of user with email and password
 *
 * @param _ undefined
 * @param values input data content
 * @param event lambda event
 * @param context lambda context
 * @returns
 */
const signIn = async (_, values, event, context) => {
  console.log("input", values);
  const res = await postRequest(URL_AUTH + "/login", values.input);
  return res.data.message;
};

/**
 * signInGoogle sign-in user using google account
 * it will check if the user is already in the database based on the email
 *
 * @param _ undefined
 * @param values input data content
 * @param event lambda event
 * @param context lambda context
 * @returns
 */
const signInGoogle = async (_, values, event, context) => {
  //console.log("Send payload", context);
  console.log("values", values);
  console.log("Authorization", event.lambdaEvent.headers.authorization);
  //const res = await postRequest(URL_AUTH + "/google", values);
  const res = await postRequest(
    URL_AUTH + "/google",
    event.lambdaEvent.headers.authorization
  );
  //console.log(res);
  console.log(`response message`, res.data.message);
  return res.data.message;
};

module.exports = {
  signIn,
  signInGoogle,
};
