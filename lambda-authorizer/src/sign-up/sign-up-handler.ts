const signUpHandler = async (event, context) => {
  const { body } = event;
  const user = JSON.parse(body);
  const { signUp } = context;
  const response = await signUp(user);
  return {
    message:
      "Go Serverless v3! Your function executed successfully from lambda user!",
    response,
  };
};

export { signUpHandler };
