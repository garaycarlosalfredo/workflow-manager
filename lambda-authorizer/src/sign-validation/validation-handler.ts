const validationHandler = async (event, context) => {
  const {
    headers: { authorization },
  } = event;
  const { validation } = context;
  // (TODO) handle errors
  const response = await validation(authorization);
  return {
    message:
      "Go Serverless v3! Your function executed successfully from lambda user!",
    response,
  };
};

export { validationHandler };
