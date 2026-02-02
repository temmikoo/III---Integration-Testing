const expresss = require("express");
const app = expresss();

app.use(expresss.json());

app.get("/", (req, res) => {
  res.send("Hex to RGB API");
});

const PORT = 3000;

const hexToRgb = require("./hexToRgb");
// REST API endpoint for hex to RGB conversion
app.get("/hex/:hex", (req, res) => {
  const hex = req.params.hex;
  const rgb = hexToRgb(hex);
  res.json(rgb);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
