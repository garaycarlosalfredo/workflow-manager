const { URL_AUTH } = process.env;

export const signIn = async (_, values, event, context) => {
  const {
    lambdaContext: { postRequest },
  } = event;
  const res = await postRequest(URL_AUTH + "/login", values.input);
  return res.data.message;
};

export const signInGoogle = async (_, values, event, context) => {
  const {
    lambdaContext: { postRequest },
  } = event;
  const res = await postRequest(
    URL_AUTH + "/google",
    event.lambdaEvent.headers.authorization
  );
  return res.data.message;
};
