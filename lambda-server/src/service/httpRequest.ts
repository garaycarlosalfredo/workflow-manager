import fetch from "node-fetch";
import { buildUrl, buildHeader, buildBody } from "../utils/create-url";

export const fetchRequest = async ({
  baseUrl = "",
  method,
  payload,
  pathParameters,
  queryStringParameters,
  extraHeaders,
}) => {
  try {
    const url = buildUrl({ baseUrl, pathParameters, queryStringParameters });
    const headers = buildHeader(extraHeaders);
    const body = buildBody(payload);

    const options = {
      method,
      headers,
      body,
    };

    const response = await fetch(url, options);

    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};
