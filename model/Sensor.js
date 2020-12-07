const Sequelize = require("sequelize");

const sequelize = new Sequelize("sensor2b", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

//sequelize.authenticate()
const Sensor = sequelize.define("sensor", {
  description: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
  },
  brand: {
    type: Sequelize.STRING,
  },
});

const createSensor = function (sensor, callback, callbackError) {
  Sensor.create(sensor).then(callback).catch(callbackError);
};

const getAllSensors = function (callback, callbackError) {
  Sensor.findAll().then(callback).catch(callbackError);
};

const getSensorById = function (id, callback, callbackError) {
  Sensor.findOne({
    where: {
      id: id,
    },
  })
    .then(callback)
    .catch(callbackError);
};

const getSensorsByType = function (type, callback, callbackError) {
  Sensor.findAll({
    where: {
      type: type,
    },
  })
    .then(callback)
    .catch(callbackError);
};

const deleteById = function (id, callback, callbackError) {
  Sensor.destroy({
    where: {
      id: id,
    },
  })
    .then(callback)
    .catch(callbackError);
};

const updateById = function (id, sensor, callback, callbackError) {
  Sensor.update(
    {
      description: sensor.description,
      brand: sensor.brand,
      type: sensor.type,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then(callback)
    .catch(callbackError);
};

//Sensor.sync({force: true})

module.exports = {
  createSensor,
  deleteById,
  updateById,
  getAllSensors,
  getSensorsByType,
  getSensorById,
};
