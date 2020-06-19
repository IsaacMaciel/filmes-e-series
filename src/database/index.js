const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Genre = require('../models/Genre');

const connection = new Sequelize(dbConfig);

Genre.init(connection);

module.exports = connection;