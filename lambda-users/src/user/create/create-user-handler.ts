const userHandler = async (event, context) => {
  const { createUser } = context;
  const { body } = event;
  const user = JSON.parse(body);
  await createUser(user);
  return {
    message:
      "Go Serverless v3! Your function executed successfully from lambda user Real!",
  };
};

export { userHandler };
