const axios = require("axios");
//const { SLACK_URL_TEST } = process.env;
const url = "http://localhost:4000";

const postRequest = async (data) => {
  const res = await axios.post(url, data);
  console.log("post request success");
  return res;
};

module.exports = {
  postRequest,
};
