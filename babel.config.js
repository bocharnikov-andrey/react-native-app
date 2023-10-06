module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [["babel-plugin-module-resolver", {
      "alias": {
        components: "./src/components",
        types: "./src/types",
        constants: "./src/constants",
        utils: "./src/utils"
      }
    }]]
  };
};

