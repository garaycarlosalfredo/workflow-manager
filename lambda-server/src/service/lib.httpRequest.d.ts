export type FetchRequestProps = {
  baseUrl: string;
  method?: string;
  payload?: object;
  pathParameters?: object;
  queryStringParameters?: object;
  extraHeaders?: object;
};
