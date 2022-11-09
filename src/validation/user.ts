import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  username: Joi.string(),
  email: Joi.string().email().required(),
  mobile: Joi.string().min(10),
  password: Joi.string().min(8).required(),
  confirm_password: Joi.string().min(8),
  country_code: Joi.string(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const updateSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  username: Joi.string(),
  mobile: Joi.string().min(10),
  country_code: Joi.string(),
  country: Joi.string(),
  province: Joi.string(),
  location: Joi.string(),
  date_of_birth: Joi.string(),
});
