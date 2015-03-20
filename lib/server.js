"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var express = _interopRequire(require("express"));

var expresshbs = _interopRequire(require("express-handlebars"));

var app = express();

app.engine("hbs", expresshbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(process.env.NODE_PORT || 3000);