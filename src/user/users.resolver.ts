const { APP_VERSION, APP_ENV } = process.env;
const axios = require("axios");

const postRequest = async (data) => {
  const res = await axios.post("http://localhost:4000", data);
  console.log("post request success");
  return res;
};

const userRequest = async (data) => {
  const res = await postRequest({});
  console.log(`${res} ${typeof res}`, res.data.message);
  return res.data.message;
};

module.exports = {
  Query: {
    hello: async () => await userRequest({}),
  },
};
