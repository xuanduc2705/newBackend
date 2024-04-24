const express = require("express");
const cors = require("cors");
const { default: routeapi } = require("@/route");
require("./connect");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;

const listener = app.listen(PORT, () => {
  console.log("Server is running on the port " + listener.address().port);
});
app.use(routeapi);
