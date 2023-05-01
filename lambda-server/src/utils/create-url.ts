import { concat, converge, mergeRight, isNotNil } from "ramda";
import qs from "qs";
import {
  BuildUrlOptions,
  AddQueryStringOptions,
  InterpolateUrlParams,
} from "./lib.create-url";

const URL_INTERPOLATION_PATTERN: RegExp = /{([^}]+)}/g;

const interpolateUrl = ({ baseUrl, pathParameters }: InterpolateUrlParams) => {
  if (isNotNil(pathParameters)) {
    return baseUrl?.replace(URL_INTERPOLATION_PATTERN, (_, prop) =>
      encodeURIComponent(pathParameters?.[prop] ?? "")
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
const addQueryString = ({ queryStringParameters }: AddQueryStringOptions) =>
  qs.stringify(queryStringParameters, {
    addQueryPrefix: true,
  });

const buildUrl = ({
  baseUrl,
  pathParameters,
  queryStringParameters,
}: BuildUrlOptions) => {
  return converge(concat, [interpolateUrl, addQueryString])({
    baseUrl,
    pathParameters,
    queryStringParameters,
  });
};

const buildHeader = (extraHeaders: object = {}) => {
  return mergeRight({ "Content-Type": "application/json" }, extraHeaders);
};
const buildBody = JSON.stringify;

export { buildUrl, buildHeader, buildBody };
