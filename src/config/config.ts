import dotenv from "dotenv";
import Joi from "joi";
dotenv.config({ path: ".env" });
import { Dialect } from "sequelize";

const envSchema = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_TYPE: Joi.string().valid("mysql", "postgres", "sqlite", "mariadb", "mssql").required(),
  DB_NAME: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  SECRET: Joi.string().required(),
  TOKEN_EXPIRY_HOUR: Joi.string().required(),
  EMAIL_SERVICE: Joi.string().required(),
  EMAIL_USER: Joi.string().required(),
  EMAIL_PASS: Joi.string().required(),
  EMAIL_FROM: Joi.string().required(),
  OTP_EXPIRY_MIN: Joi.string().required(),
  OTP_SECRET: Joi.string().required(),
  NODE_ENV: Joi.string().valid("development", "production", "test").default("development"),
  PORT: Joi.number().default(3000)
}).unknown();

const { error } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const dbConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  dialect: process.env.DB_TYPE as Dialect,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

export const jwtConfig = {
  secret: process.env.SECRET,
  expiry: process.env.TOKEN_EXPIRY_HOUR,
  saltRound: 3,
};

export const emailConfig = {
  emailService: process.env.EMAIL_SERVICE,
  emailUser: process.env.EMAIL_USER,
  emailPassword: process.env.EMAIL_PASS,
  emailFrom: process.env.EMAIL_FROM,
};

export const otpConfig = {
  otpExpiry: process.env.OTP_EXPIRY_MIN,
  otpSecret: process.env.OTP_SECRET,
};
