const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const path = require("path");
const fs = require("fs");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/word", require("./routes/word.route"));

http.listen(3000, () => {
  console.log("listen....");
});
