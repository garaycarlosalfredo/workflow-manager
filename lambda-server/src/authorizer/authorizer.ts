const { URL_AUTH } = process.env;

export const signIn = async (_, values, event, context) => {
  const {
    lambdaContext: { fetchRequest },
  } = event;

  const res = await fetchRequest({
    baseUrl: URL_AUTH + "/login",
    payload: values.input,
    method: "POST",
  });
  return res.message;
};

export const signInGoogle = async (_, values, event, context) => {
  const {
    lambdaContext: { fetchRequest },
  } = event;
  const res = await fetchRequest({
    baseUrl: URL_AUTH + "/google",
    payload: event.lambdaEvent.headers.authorization,
    method: "POST",
  });
  return res.data.message;
};
