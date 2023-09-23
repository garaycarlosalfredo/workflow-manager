import { getUserById, findUserByEmail } from "../service/user-db";

const userHandler = async (event, context) => {
  // console.info("event", event);
  // console.info("context", context);
  //console.info("fconsole", context.fconsole);
  // const a = context.fconsole;
  // a();

  try {
    // const user = await getUserById("1");
    // console.log("[user]", user);

    // const user = await findUserByEmail({ email: "JohnDoe@mail.com" });
    const user = await findUserByEmail({ personalId: "2" });
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
