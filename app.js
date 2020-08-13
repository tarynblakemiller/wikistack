const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout.js");
const path = require("path");

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("sdlkfjsd");
});

// app.get("/", function (req, res) {
//   res.redirect("/wiki/");
// });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
