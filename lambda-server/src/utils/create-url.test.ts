import { buildHeader, buildUrl, buildBody } from "./create-url";

describe("buildHeader", () => {
  test("should generate a default headers in case of undefined argument", () => {
    const headers = buildHeader(undefined);
    expect(headers["Content-Type"]).toBe("application/json");
  });
  test("should generate a default headers in case of none argument", () => {
    const headers = buildHeader();
    expect(headers["Content-Type"]).toBe("application/json");
  });
  test("should generate headers with correct content type", () => {
    const headers = buildHeader({ header2: "value2", "header-3": "value3" });
    expect(headers).toEqual({
      "Content-Type": "application/json",
      header2: "value2",
      "header-3": "value3",
    });
  });
});

describe("buildUrl", () => {
  test("without not path or query parameters should generate a basic url", () => {
    const headers = buildUrl({
      baseUrl: "../{a}/",
    });
    expect(headers).toEqual("../{a}/");
  });
  test("with path parameters should generate a url and interpolate the data into the path", () => {
    const headers = buildUrl({
      baseUrl: "../{a}/some/{b}/other",
      pathParameters: { a: "valueA", b: "ValueB" },
    });
    expect(headers).toEqual("../valueA/some/ValueB/other");
  });
  test("without query parameters should generate a url add the query string data", () => {
    const headers = buildUrl({
      baseUrl: "../some/other",
      queryStringParameters: { x: "valueX", y: "valueY" },
    });
    expect(headers).toEqual("../some/other?x=valueX&y=valueY");
  });

  test("without both parameters should generate an url with path and query parameters", () => {
    const headers = buildUrl({
      baseUrl: "../{a}/some/{b}/other",
      pathParameters: { a: "valueA", b: "ValueB" },
      queryStringParameters: { x: "valueX", y: "valueY" },
    });
    expect(headers).toEqual("../valueA/some/ValueB/other?x=valueX&y=valueY");
  });
});

describe("buildBody", () => {
  test("should be undefined in case of undefined argument", () => {
    const body = buildBody(undefined);
    expect(body).toEqual(undefined);
  });
  test("should stringify the the payload", () => {
    const payload = { a: "valueA" };
    const body = buildBody(payload);
    expect(body).toEqual(JSON.stringify(payload));
  });
});
