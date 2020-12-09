const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from the backend",
  });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
