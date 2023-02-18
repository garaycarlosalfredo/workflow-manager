const eventBody = (event) => {
  const { body } = event;
  return JSON.parse(body);
};

module.exports = { eventBody };
