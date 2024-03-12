const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    taskTimeout: 2000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
