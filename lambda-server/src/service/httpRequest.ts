import fetch from "node-fetch";

export const fetchRequest = async ({
  url,
  method,
  body,
  pathParameters,
  queryStringParameters,
}) => {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
