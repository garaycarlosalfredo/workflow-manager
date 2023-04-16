const userHandler = async (event, context) => {
  // console.info("context", context);
  return {
    message:
      "Go Serverless v3! Your function executed successfully from lambda user!",
  };
};

export { userHandler };
