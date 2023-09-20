const eventBody = (event) => {
  const { body } = event;
  return JSON.parse(body);
};

const eventGoogleApiCode = (event) => {
  return event.queryStringParameters.code;
};

const getOauth2IdToken = (codeToken) => {
  return codeToken.tokens.id_token;
};

export { eventBody, eventGoogleApiCode, getOauth2IdToken };
