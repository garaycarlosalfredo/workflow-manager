const addUserHandler = async (event, context) => {
  const { addUser } = context;
  const { body } = event;
  console.log("event", event);
  try {
    const user = await addUser(JSON.parse(body));
    return {
      message:
        "Go Serverless v3! Your function executed successfully from lambda user!",
      user,
    };
  } catch (error) {
    console.log("error", error);
  }
};

export { addUserHandler };
