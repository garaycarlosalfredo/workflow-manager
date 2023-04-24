import { getItem } from "../Service/user-db";
const { REGION, TABLE_USERS, IS_LOCAL } = process.env;

const userHandler = async (event, context) => {
  console.info("context", context);
  console.info("fconsole", context.fconsole);
  const a = context.fconsole;
  a();

  try {
    console.log("IS_LOCAL", IS_LOCAL);
    const user = await getItem({
      TableName: "lambda-user-dev-users",
      Key: { userId: { S: "1" } },
    });
  } catch (error) {
    console.log("error", error);
  }

  return {
    message:
      "Go Serverless v3! Your function executed successfully from lambda user!",
    // user,
  };
};

export { userHandler };
