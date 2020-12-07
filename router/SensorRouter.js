const sensorController = require("../controller/SensorController")

module.exports = function(app){
    app.get("/sensor/:id" ,sensorController.getSensorById)
    app.get("/sensor", sensorController.getSensors)
    app.post("/sensor", sensorController.createSensor)
    app.put("/sensor/:id",sensorController.updateSensorById)
    app.delete("/sensor/:id",sensorController.deleteSensorById)
}


