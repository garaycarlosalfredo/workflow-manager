const { postRequest } = require("../service/axios.ts");
const {URL_AUTH} = process.env

const signIn = async (data) => {
  const res = await postRequest(URL_AUTH, {});
  console.log(`${res} ${typeof res}`, res.data.message);
  return res.data.message;
};

module.exports = {
  signIn,
};
