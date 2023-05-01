import fetch from "node-fetch";
import { buildUrl, buildHeader, buildBody } from "../utils/create-url";
import { FetchRequestProps } from "./lib.httpRequest";

export const fetchRequest = async ({
  baseUrl = "",
  method,
  payload,
  pathParameters,
  queryStringParameters,
  extraHeaders,
}: FetchRequestProps): Promise<any> => {
  try {
    const url = buildUrl({ baseUrl, pathParameters, queryStringParameters });
    const headers = buildHeader(extraHeaders);
    const body = buildBody(payload);

    const options = {
      method,
      headers,
      body,
    };

    console.log("options", options);
    const response = await fetch(url, options);
    console.log("jsonResponse1", response);
    const jsonResponse = await response.json();
    console.log("jsonResponse", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.error(error);
    return { error: error };
  }
};
