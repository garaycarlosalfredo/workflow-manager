import { fetchRequest } from "./httpRequest";
import fetch, { Response } from "node-fetch";

jest.mock("node-fetch");

describe("fetchRequest function", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should return parsed JSON response for valid request", async () => {
    const mockResponse = {
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

    const response = await fetchRequest({
      baseUrl: "https://example.com",
      method: "GET",
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://example.com", {
      body: undefined,
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });
    // expect(mockResponse.headers.get).toHaveBeenCalledTimes(1);
    // expect(mockResponse.headers.get).toHaveBeenCalledWith("content-type");
    expect(mockResponse.text).toHaveBeenCalledTimes(1);
    expect(response).toEqual({ foo: "bar" });
  });

  it("should throw an error for unsuccessful request", async () => {
    const mockResponse = {
      ok: false,
      json: jest.fn(),
      text: jest.fn().mockResolvedValue("Not found"),
      headers: {
        get: jest.fn(),
        "content-type": "application/json",
      },
      status: 404,
    } as unknown as Response;
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
      mockResponse
    );

    await expect(
      fetchRequest({
        baseUrl: "https://example.com",
        method: "GET",
      })
    ).rejects.toThrow("Request failed with status code 404");
  });
});
