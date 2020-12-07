const controller = require("../controller/DataController")

module.exports = function(app){
    app.post("/sensordata",controller.postDataReader)
}