const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    message: "Backend PC Store hoạt động!"
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Backend chạy tại cổng 3000");
});