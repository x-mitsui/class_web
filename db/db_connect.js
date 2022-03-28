const Sequelize = require('sequelize')

const { MYSQL_CONF } = require('../configs/db_config')

const seq = new Sequelize(...MYSQL_CONF.conf, MYSQL_CONF.base)

module.exports = seq
