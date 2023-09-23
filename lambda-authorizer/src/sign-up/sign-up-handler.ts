const signUpHandler = async (event, context) => {
  const { body } = event;
  const { signUp } = context;
  // (TODO) handle errors
  const response = await signUp(JSON.parse(body));
  return {
    message:
      "Go Serverless v3! Your function executed successfully from lambda user!",
    response,
  };
};

export { signUpHandler };
