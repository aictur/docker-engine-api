import Port from "../src/DTO/Port";

describe("PortDTO", () => {
  it("can be instantiated without throwing errors", () => {
    function getPort() {
      return new Port(65536);
    }

    expect(getPort).not.toThrowError;
  });
  it("throws an error when is out of range", () => {
    function getPort() {
      return new Port(65536);
    }

    expect(getPort).toThrowError();
  });
  it("throws an error when is 0 or less", () => {
    function getPort() {
      return new Port(0);
    }

    expect(getPort).toThrowError();
  });
  it("stores the value correclty", () => {
    expect(new Port(80).value).toBe(80);
  });
});
