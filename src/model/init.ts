import sequelizeConnection from "./connection";

import User from "./models/User";

const isDev = process.env.NODE_ENV === "development";

// add all model here
// this step is important for syncing all model
export const modelList = {
  User,
};

/**
 * Sync database

 * @returns  boolean
 */

const dbInit = async () => {
  try {
    await sequelizeConnection.sync({ alter: isDev });
    return { success: true };
  } catch (error) {
    throw error;
  }
};
export default dbInit;
