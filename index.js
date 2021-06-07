const express = require("express");
const cons = require('consolidate');
const https = require("https");
const path = require("path");
const static_path = path.join(__dirname, "./views");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(static_path));
app.engine('html', cons.swig)
app.set('view engine', 'html');
app.set('views', static_path);

app.get("/", (req, res) => {
    res.render("index");
  });

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} `);
})