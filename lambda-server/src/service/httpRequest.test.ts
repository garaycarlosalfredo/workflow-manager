import { fetchRequest } from "./httpRequest";
import fetch, { Response } from "node-fetch";

jest.mock("node-fetch");

describe("fetchRequest function", () => {
  let mockResponse: Response;

  beforeEach(() => {
    mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ foo: "bar" }),
      text: jest.fn().mockResolvedValue(JSON.stringify({ foo: "bar" })),
      headers: {
        get: jest.fn(),
      },
    } as unknown as Response;
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
      mockResponse
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should call fetch with the basic information", async () => {
    const response = await fetchRequest({
      baseUrl: "https://example.com",
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://example.com", {
      body: undefined,
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });
  });

  it("should call fetch with the method in props", async () => {
    const response = await fetchRequest({
      baseUrl: "https://example.com",
      method: "POST",
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://example.com", {
      body: undefined,
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
  });

  it("should call fetch with the payload data included in body", async () => {
    const payload = { name: "Carlos" };
    const response = await fetchRequest({
      baseUrl: "https://example.com",
      payload,
      method: "PUT",
    });
    expect(fetch).toHaveBeenCalledWith("https://example.com", {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  });

  it("should call fetch with additional headers included", async () => {
    const response = await fetchRequest({
      baseUrl: "https://example.com",
      extraHeaders: { "extra-header-1": "H1", "extra-header-2": "H2" },
      method: "GET",
    });
    expect(fetch).toHaveBeenCalledWith("https://example.com", {
      body: undefined,
      headers: {
        "Content-Type": "application/json",
        "extra-header-1": "H1",
        "extra-header-2": "H2",
      },
      method: "GET",
    });
  });

  it("should call fetch with the path parameters included", async () => {
    const response = await fetchRequest({
      baseUrl: "https://example.com.{country}/{currency}",
      pathParameters: { country: "ar", currency: "ars" },
      method: "GET",
    });
    expect(fetch).toHaveBeenCalledWith("https://example.com.ar/ars", {
      body: undefined,
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
  });

  it("should throw an error for unsuccessful request", async () => {
    mockResponse.ok = false;
    mockResponse.status = 404;
    mockResponse.json = jest.fn();
    mockResponse.text = jest.fn().mockResolvedValue("Not found");

    await expect(
      fetchRequest({
        baseUrl: "https://example.com",
        method: "GET",
      })
    ).rejects.toThrow("Request failed with status code 404");
  });
});
