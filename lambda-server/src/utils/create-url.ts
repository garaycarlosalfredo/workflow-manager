import { concat, converge, mergeRight } from "ramda";
import qs from "qs";

function interpolateUrl({ baseUrl, pathParameters }) {
  const pattern = /{([^}]+)}/g;
  let url = baseUrl;
  if (pathParameters !== null && pathParameters !== undefined) {
    url = baseUrl.replace(pattern, (_, prop) =>
      encodeURIComponent(pathParameters[prop] ?? "")
    );
  }
  return url;
}
/**
 * Function create an string of query string parameters
 *
 * @param param0.queryStringParameters // object with query parameters
 * @returns string
 */
const addQueryString = ({ queryStringParameters }) =>
  qs.stringify(queryStringParameters, {
    addQueryPrefix: true,
  });

const buildUrl = (baseUrl, pathParameters?, queryStringParameters?) => {
  return converge(concat, [interpolateUrl, addQueryString])({
    baseUrl,
    pathParameters,
    queryStringParameters,
  });
};

const buildHeader = (extraHeaders = {}) =>
  mergeRight({ "Content-Type": "application/json" }, extraHeaders);

const buildBody = JSON.stringify;

export { buildUrl, buildHeader, buildBody };
