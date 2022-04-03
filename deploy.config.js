module.exports = {
  app: {
    name: 'official_jspp_home',
    script: 'app.js',
    // cwd: './', // 当前工作路径
    // watch: true, // 监控变化的目录
    // exec_mode: 'cluster', // 集群模式
    // instances: 'max', // 实例数量
    // max_memory_restart: '40M', // 如果超过指定内存就重启
    ignore_watch: [
      // 从监控目录中排除
      'node_modules',
      'logs'
    ],
    // error_file: './logs/app-err.log', // 错误日志路径
    // out_fileL: './logs/app-out.log', // 普通日志路径
    env: {
      // 默认环境变量
      NODE_ENV: 'production' // 环境变量
    },
    env_dev: {
      // 命令行可以指定当前环境变量为dev
      NODE_ENV: 'development'
    },
    env_prod: {
      NODE_ENV: 'production'
    }
  },

  deploy: {
    production: {
      user: 'root',
      host: '47.94.144.41',
      ref: 'origin/main',
      repo: 'https://gitee.com/x_mitsui/class_web.git',
      path: '/www/jspp_home/production',
      'pre-deploy': 'git fetch --all',
      'post-deploy': 'yarn && yarn prd'
    }
  }
}
