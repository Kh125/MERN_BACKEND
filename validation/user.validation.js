const joi = require("joi");

const createUserValidation = (data) => {
  const schema = joi.object({
    username: joi.string().min(6).max(255).required(),
    email: joi
      .string()
      .email({
        tlds: { allow: ["com", "edu", "mm"] },
      })
      .max(255)
      .required(),
    password: joi.string().min(8).max(255).required(),
  });

  return schema.validate(data);
};
const loginValidation = (data) => {
  const schema = joi.object({
    email: joi
      .string()
      .email({
        tlds: { allow: ["com", "edu", "mm"] },
      })
      .max(255)
      .required(),
    password: joi.string().min(8).max(255).required(),
  });

  return schema.validate(data);
};

module.exports = {
  createUserValidation,
  loginValidation,
};
