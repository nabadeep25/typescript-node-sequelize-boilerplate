import { Sequelize } from "sequelize";

import { dbConfig } from "../config/config";

const sequelizeConnection = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
  }
);

export default sequelizeConnection;
