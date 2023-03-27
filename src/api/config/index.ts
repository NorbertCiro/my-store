export default {
  api: {
    prefix: '/api/v1',
  },
  dbHost: process.env.DBHOST || 'mongodb://localhost:27017',
  dbName: process.env.DBNAME || 'supergiros_roulette',
  port: process.env.PORT || '4200'
}
