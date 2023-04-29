const { URL_AUTH } = process.env;

export const signIn = async (_, values, event, context) => {
  const {
    lambdaContext: { fetchRequest },
  } = event;

  const res = await fetchRequest({
    url: URL_AUTH + "/login",
    body: values.input,
    method: "POST",
  });
  return res.message;
};

export const signInGoogle = async (_, values, event, context) => {
  const {
    lambdaContext: { fetchRequest },
  } = event;
  const res = await fetchRequest({
    url: URL_AUTH + "/google",
    body: event.lambdaEvent.headers.authorization,
    method: "POST",
  });
  return res.data.message;
};
