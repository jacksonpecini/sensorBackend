const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyparser.json());

app.use(cors());

require("./router/SensorRouter")(app);
require("./router/DataRouter")(app);

app.listen(5000, function () {
  console.log("Servidor inicializado");
});
