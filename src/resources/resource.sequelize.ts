import { Dialect, Sequelize } from 'sequelize';
import * as config from '../../config/config';

const sequelizeResource = new Sequelize(
  {
    database: config.db.database,
    username: config.db.username,
    password: config.db.password,
    host: config.db.host,
    dialect: (config.db.dialect as Dialect),
    port: config.db.port,
  },
);

export { sequelizeResource };
