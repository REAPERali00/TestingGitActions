const app = require("express")();

app.get("/", (req, res) => {
  return res.statusCode(200).send("Hello world");
});

module.exports = app;

