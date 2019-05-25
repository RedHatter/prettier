"use strict";

const commonOptions = require("../common/common-options");

// format based on https://github.com/prettier/prettier/blob/master/src/main/core-options.js
module.exports = {
  singleQuote: commonOptions.singleQuote,
  cssSortOrder: {
    since: "1.18.0",
    category: "Format",
    type: "path",
    default: "",
    description: "The order to sort CSS properties."
  }
};
