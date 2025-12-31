const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "",
    env: {
      username: process.env.USER_EMAIL,
      password: process.env.USER_PASSWORD,
    },

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      reportFilename: "[name]-[hash]",   // 🔥 MOST IMPORTANT LINE
      overwrite: false,
      html: false,
      json: true,
      quiet: true
    },

    setupNodeEvents(on, config) {
      if (process.env.CI) {
        if (!config.baseUrl) {
          throw new Error("❌ BASE_URL is missing");
        }
        if (!config.env.username || !config.env.password) {
          throw new Error("❌ USER_EMAIL or USER_PASSWORD is missing");
        }
      }
      return config;
    },
  },
});
