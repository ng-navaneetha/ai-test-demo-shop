const express = require("express");
const path = require("path");

const app = express();

const pagesPath = path.join(__dirname, "pages");

const jsPath = path.join(__dirname, "js");

// Serve html pages
app.use(express.static(pagesPath));

// Serve javascript files
app.use("/js", express.static(jsPath));

// Login page
app.get("/", (req, res) => {
  res.sendFile(path.join(pagesPath, "login.html"));
});

// Products page
app.get("/products", (req, res) => {
  res.sendFile(path.join(pagesPath, "products.html"));
});

app.listen(4000, () => {
  console.log("Demo Shop running on port 4000");
});
