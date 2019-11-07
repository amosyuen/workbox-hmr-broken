const path = require("path");

module.exports = (api, opts = {}) => {
  api.cache.using(() => JSON.stringify(opts));
  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: []
  };
};
