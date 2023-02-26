const { postRequest } = require("../service/axios.ts");
const { URL_AUTH } = process.env;

/**
 *
 * @param _ undefined
 * @param input input data content
 * @param event lambda event
 * @param context lambda context
 * @returns
 */
const signIn = async (_, input, event, context) => {
  const res = await postRequest(URL_AUTH + "/login", {});
  return res.data.message;
};

/**
 *
 * @param _ undefined
 * @param input input data content
 * @param event lambda event
 * @param context lambda context
 * @returns
 */
const signInGoogle = async (_, input, event, context) => {
  //console.log("Send payload", context);
  //console.log("Send event", event);
  console.log("Authorization", event.lambdaEvent.headers.authorization);
  const res = await postRequest(URL_AUTH + "/google", input);
  //console.log(res);
  console.log(`response message`, res.data.message);
  return res.data.message;
};

module.exports = {
  signIn,
  signInGoogle,
};
