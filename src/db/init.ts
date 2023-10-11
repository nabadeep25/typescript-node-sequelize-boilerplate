import sequelizeConnection from "./connection";

import { readdirSync } from "fs";
import path from "path";
import { Model } from "sequelize";

const isDev = process.env.NODE_ENV === "development";
const modelsFolder = path.join("src", "models");

const modelList: { [key: string]: Model } = {};

const importModel = async (file: string) => {
  const model = await import(path.join("../models", file));
  modelList[path.basename(file, ".ts")] = model.default;
};

const importModels = async () => {
  const files = readdirSync(modelsFolder);
  await Promise.all(files.map(importModel));
};
importModels();

const dbInit = async () => {
  try {
    await sequelizeConnection.sync({ alter: isDev });
    return { success: true };
  } catch (error) {
    throw error;
  }
};
export { modelList };
export default dbInit;
