const userHandler = async (event, context) => {
  const { createUser } = context;
  await createUser({ a: "A" });
  return {
    message:
      "Go Serverless v3! Your function executed successfully from lambda user Real!",
  };
};

export { userHandler };
