const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateNewTodoInput(data) {
  let errors = {};

  // Converting empty fields to an empty string so we can use validator functions
  data.title = !isEmpty(data.title) ? data.title : "";

  // Title checks
  if (Validator.isEmpty(data.title)) {
    errors.title = "Todo title field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };

};
