const sensor = require("../model/Sensor");

function error(response) {
  response.statusCode = 401;
  response.setHeader("Content-Type", "application/json");

  let objectResponse = {
    response: "error",
  };

  response.end(JSON.stringify(objectResponse));
}

function successResponseWithObject(object, response) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  let objectResponse = {
    response: "success",
    data: object,
  };
  response.end(JSON.stringify(objectResponse));
}

const getSensors = function (request, response) {
  let paramType = request.query.type;

  if (paramType == null) {
    sensor.getAllSensors(
      function (sensors) {
        successResponseWithObject(sensors, response);
      },
      function () {
        //Error
        error(response);
      }
    );
  } else {
    sensor.getSensorsByType(
      paramType,
      function (sensors) {
        successResponseWithObject(sensors, response);
      },
      function () {
        //Error
        error(response);
      }
    );
  }
};

const getSensorById = function (request, response) {
  let id = request.params.id;

  if (id == null) {
    error(response);
  } else {
    sensor.getSensorById(
      id,
      function (sensor) {
        if (sensor == null) {
          error(response);
        } else {
          successResponseWithObject(sensor, response);
        }
      },
      function () {
        error(response);
      }
    );
  }
};

const createSensor = function (request, response) {
  let body = request.body;

  if (body == null || body.description == null || body.type == null) {
    error(response);
  } else {
    sensor.createSensor(
      body,
      function (content) {
        //Success
        response.statusCode = 201;
        response.setHeader("Content-Type", "application/json");

        let objectResponse = {
          response: "create",
        };
        response.end(JSON.stringify(objectResponse));
      },
      function () {
        error(response);
      }
    );
  }
};

const deleteSensorById = function (request, response) {
  let id = request.params.id;

  if (id == null) {
    error(response);
  } else {
    sensor.deleteById(
      id,
      function () {
        //Success
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");

        let objectResponse = {
          response: "deleted",
        };
        response.end(JSON.stringify(objectResponse));
      },
      function () {
        error(response);
      }
    );
  }
};

const updateSensorById = function (request, response) {
  let id = request.params.id;
  let body = request.body;

  if (
    id == null ||
    body == null ||
    body.description == null ||
    body.type == null
  ) {
    error(response);
  } else {
    sensor.updateById(
      id,
      body,
      function () {
        //Success
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");

        let objectResponse = {
          response: "updated",
        };
        response.end(JSON.stringify(objectResponse));
      },
      function () {
        error(response);
      }
    );
  }
};

module.exports = {
  getSensors,
  getSensorById,
  deleteSensorById,
  updateSensorById,
  createSensor,
};
