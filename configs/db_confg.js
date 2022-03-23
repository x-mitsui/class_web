const ENV = require('./env_config')
module.exports = {
  MYSQL_CONF: {
    base: {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        // 线程池配置
        max: 5,
        min: 0,
        idle: 10000
      }
    },
    conf: ['txclass02', 'root', ENV.isProd ? '__' : 'DZQ19900131'] //数据库名，用户名，密码
  }
}
