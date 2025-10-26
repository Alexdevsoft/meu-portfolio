module.exports = {
  apps: [
    {
      name: 'alexsandro.almeida',
      script: 'npx',
      args: 'wrangler pages dev dist --ip 0.0.0.0 --port 5173',
      env: {
        NODE_ENV: 'development',
        PORT: 5173
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
