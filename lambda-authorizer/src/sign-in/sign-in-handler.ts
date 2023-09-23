const signInHandler = async (event, context) => {
  const { body } = event;
  const userCredentials = JSON.parse(body);
  const { signIn } = context;
  const response = await signIn(userCredentials);
  console.log("[response]", response);
  return {
    message:
      "Go Serverless v3! Your function executed successfully from lambda user!",
    id: response,
  };
};

export { signInHandler };
