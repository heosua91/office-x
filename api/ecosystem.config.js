module.exports = {
  apps: [
    {
      name: 'alb-office-x',
      script: './dist/main.js',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'development',
        APP_ENV: 'development',
        APP_PORT: 10091,
      },
      kill_timeout: 5000,
      max_restarts: 3,
      min_uptime: '10s',
    },
  ],
};
