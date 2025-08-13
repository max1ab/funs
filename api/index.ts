const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
  res.redirect("/ball-physics-simulation");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
