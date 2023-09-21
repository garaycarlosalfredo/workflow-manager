const signInHandler = async (event, context) => {
  const { body } = event;
  const user = JSON.parse(body);
  const { signIn } = context;
  const response = await signIn(user);
  return {
    message:
      "Go Serverless v3! Your function executed successfully from lambda user!",
    response,
  };
};

export { signInHandler };
