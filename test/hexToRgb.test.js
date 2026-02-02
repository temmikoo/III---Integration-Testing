// Unit tests for hexToRgb conversion function

const { expect } = require("chai");
const hexToRgb = require("../hexToRgb");

describe("hexToRgb", () => {
  it("converts #ff0000 to red", () => {
    const result = hexToRgb("#ff0000");
    expect(result).to.deep.equal({ r: 255, g: 0, b: 0 });
  });

  it("converts 00ff00 to green", () => {
    const result = hexToRgb("00ff00");
    expect(result).to.deep.equal({ r: 0, g: 255, b: 0 });
  });
});
