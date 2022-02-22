const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//setting
app.set("view engine", "ejs");
app.use("/css", express.static("css"));
app.use("/js", express.static("js"));
app.use("/musics", express.static("musics"));
//routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/music", (req, res) => {
  res.render("music");
});
app.get("/text", (req, res) => {
  res.render("text");
});
app.get("/cake", (req, res) => {
  res.render("cake")
})
app.listen(port, () => {
  console.log("server is working on " + port);
});
