const { check } = require("express-validator");
exports.validRegister = [
  check("firstName", "First name is required")
    .notEmpty()
    .isLength({
      min: 2,
      max: 32,
    })
    .withMessage("First name must be between 1 to 32 characters"),
  check("lastName", "Last name is required")
    .notEmpty()
    .isLength({
      min: 2,
      max: 32,
    })
    .withMessage("Last name must be between 1 to 32 characters"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password", "password is required").notEmpty(),
  check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("password must contain a number"),
];

exports.validLogin = [
  check("email").isEmail().withMessage("Must be a valid email address."),
  check("password", "password is required").notEmpty(),
  check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number."),
];

exports.forgotPasswordValidator = [
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Must be a valid email address"),
];

exports.resetPasswordValidator = [
  check("newPassword")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/\d/)
    .withMessage("password must contain a number"),
];