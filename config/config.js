require("dotenv").config({ path: "./env/.env" });
let configModule = {
  db: {
    host: process.env.DBHOST,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    databaseTest: process.env.DBNAME + "_test",
    port: Number(process.env.DBPORT),
    dialect: "mysql",
  },
};
configModule.db.seederStorage = "sequelize";

configModule[process.env.NODE_ENV] = configModule.db;

console.log(process.env.NODE_ENV);

module.exports = configModule;
