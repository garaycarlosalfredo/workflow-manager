import { getItem } from "../Service/user-db";

const userHandler = async (event, context) => {
  console.info("context", context);
  console.info("fconsole", context.fconsole);
  const a = context.fconsole;
  a();

  try {
    const user = await getItem({
      TableName: "local-users",
      Key: {
        userId: "1",
      },
    });
    console.log("[user]", user);
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
