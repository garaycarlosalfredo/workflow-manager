const userHandler = async (event, context) => {
  const { getUserByPersonalId } = context;
  const {
    queryStringParameters: { numberId },
  } = event;

  try {
    const user = await getUserByPersonalId(numberId);
    return {
      message:
        "Go Serverless v3! Your function executed successfully from lambda user!",
      user: user,
    };
  } catch (error) {
    console.error("error", error);
    return error;
  }
};

export { userHandler };
