// Integration tests for /hex/:hex REST API endpoint

const request = require("supertest");
const express = require("express");
const hexToRgb = require("../hexToRgb");

const app = express();

app.get("/hex/:hex", (req, res) => {
  const rgb = hexToRgb(req.params.hex);
  res.json(rgb);
});

describe("GET /hex/:hex", () => {
  it("returns RGB for ff0000", async () => {
    await request(app)
      .get("/hex/ff0000")
      .expect(200)
      .expect({ r: 255, g: 0, b: 0 });
  });
});
