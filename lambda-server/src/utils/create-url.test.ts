import { buildHeader } from "./create-url";

describe("generateHeaders", () => {
  test("should generate headers with correct content type", () => {
    const headers = buildHeader(undefined);
    expect(headers["Content-Type"]).toBe("application/json");
  });
});

describe("generateHeaders", () => {
  test("should generate headers with correct content type", () => {
    const headers = buildHeader({ header2: "value2", "header-3": "value3" });
    console.log("headers", headers);
    expect(headers).toEqual({
      "Content-Type": "application/json",
      header2: "value2",
      "header-3": "value3",
    });
  });
});
