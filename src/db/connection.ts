import { Sequelize } from "sequelize";
import { dbConfig } from "../config/config";
import logger from "../util/logger";

const isDev = process.env.NODE_ENV === "development";

const sequelizeConnection = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: msg => logger.debug(msg),
  }
);

const dbSync = async () => {
  try {
    await sequelizeConnection.sync({ alter: isDev });
    return { success: true };
  } catch (error) {
    throw error;
  }
};
dbSync()
  .then(res => {
    logger.info(`DB sync with status: ${res.success}`);
  })
  .catch(err => {
    logger.error("Failed to sync DB", err);
  });

export { dbSync };
 
export default sequelizeConnection;
