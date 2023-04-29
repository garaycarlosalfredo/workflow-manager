import fetch from "node-fetch";
import { buildUrl } from "../utils/create-url";

export const fetchRequest = async ({
  baseUrl,
  method,
  body,
  pathParameters,
  queryStringParameters,
}) => {
  try {
    const url = buildUrl(baseUrl);

    const options = {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const response = await fetch(url, options);

    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};
