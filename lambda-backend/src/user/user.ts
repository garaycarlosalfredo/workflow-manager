const { postRequest } = require("../service/axios.ts");

const userRequest = async (data) => {
  const res = await postRequest({});
  console.log(`${res} ${typeof res}`, res.data.message);
  return res.data.message;
};

module.exports = {
  userRequest,
};
