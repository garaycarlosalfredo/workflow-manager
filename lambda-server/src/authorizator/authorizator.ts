const { postRequest } = require("../service/axios.ts");
const { URL_AUTH } = process.env;

const signIn = async (context, event) => {
  console.log("Login", event);
  const res = await postRequest(URL_AUTH, {});
  console.log(`${res} ${typeof res}`, res.data.message);
  return res.data.message;
};

const signInGoogle = async (context, event) => {
  //const res = await postRequest(URL_AUTH, {});
  //console.log(`${res} ${typeof res}`, res.data.message);
  //return res.data.message;
  console.log("context", context);
  console.log("event", event);
  return "desde server login de google: " + event.input.credential;
};
module.exports = {
  signIn,
  signInGoogle,
};
