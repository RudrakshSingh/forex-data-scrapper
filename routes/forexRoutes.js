const express = require("express");
const { body, validationResult } = require("express-validator");
const { getForexDataController } = require("../controller/forexController");

const router = express.Router();

// Validation middleware for /forex-data endpoint
const validateForexDataRequest = [
  body("from")
    .isString()
    .withMessage("From currency is required and must be a string"),
  body("to")
    .isString()
    .withMessage("To currency is required and must be a string"),
  body("fromDate")
    .isISO8601()
    .withMessage("From date must be a valid ISO date"),
  body("toDate").isISO8601().withMessage("To date must be a valid ISO date"),
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// POST route to get forex data
router.post(
  "/forex-data",
  validateForexDataRequest,
  handleValidationErrors,
  getForexDataController
);

module.exports = router;
