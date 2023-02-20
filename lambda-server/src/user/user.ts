const { postRequest } = require("../service/axios.ts");
const {URL_USERS} = process.env

const userRequest = async (data) => {
  const res = await postRequest(URL_USERS, {});
  console.log(`${res} ${typeof res}`, res.data.message);
  return res.data.message;
};

module.exports = {
  userRequest,
};
