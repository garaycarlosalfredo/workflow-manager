import fetch from "node-fetch";
import { buildUrl, buildHeader, buildBody } from "../utils/create-url";
import { FetchRequestProps } from "./lib.httpRequest";

export const fetchRequest = async ({
  baseUrl = "",
  method = "GET",
  payload,
  pathParameters,
  queryStringParameters,
  extraHeaders,
}: FetchRequestProps): Promise<any> => {
  const url = buildUrl({ baseUrl, pathParameters, queryStringParameters });
  const headers = buildHeader(extraHeaders);
  const body = buildBody(payload);

  const options = {
    method,
    headers,
    body,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed with status code ${response.status}`);
  }

  // const jsonResponse = await response.json();
  const textResponse = await response.text();

  const jsonResponse = JSON.parse(textResponse);
  return jsonResponse;
};
