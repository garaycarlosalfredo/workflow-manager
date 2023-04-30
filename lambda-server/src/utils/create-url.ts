import { concat, converge, mergeRight, isNotNil } from "ramda";
import qs from "qs";

const URL_INTERPOLATION_PATTERN = /{([^}]+)}/g;

const interpolateUrl = ({ baseUrl, pathParameters }) => {
  if (isNotNil(pathParameters)) {
    return baseUrl.replace(URL_INTERPOLATION_PATTERN, (_, prop) =>
      encodeURIComponent(pathParameters[prop] ?? "")
    );
  } else {
    return baseUrl;
  }
};
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

interface UrlOptions {
  baseUrl?: string;
  pathParameters?: object;
  queryStringParameters?: object;
}

const buildUrl = ({
  baseUrl,
  pathParameters,
  queryStringParameters,
}: UrlOptions) => {
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
