require("dotenv").config();

module.exports = {
  HOST: process.env.POSTGRESDB_HOST,
  USER: process.env.POSTGRESDB_USER,
  PASSWORD: process.env.POSTGRESDB_ROOT_PASSWORD,
  DB: process.env.POSTGRESDB_DATABASE,
  port: process.env.POSTGRESDB_DOCKER_PORT,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
