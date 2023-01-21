import axios from "axios";
// const axios = require("axios");
const { SLACK_URL_TEST } = process.env;

// const postRequest = async (data) => {
//   const res = await axios.post(SLACK_URL_TEST, data);
//   console.log("post request success");
//   return res;
// };

// module.exports = {
//   postRequest,
// };

type CreateUserResponse = {
  message: string;
};

async function createUser() {
  try {
    // 👇️ const data: CreateUserResponse
    const { data } = await axios.post<CreateUserResponse>(
      "https://reqres.in/api/users",
      { name: "John Smith", job: "manager" },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export createUser;
