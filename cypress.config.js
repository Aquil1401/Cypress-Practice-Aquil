const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports/raw",   // 👈 RAW JSON HERE
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    baseUrl: process.env.BASE_URL || "",
    env: {
      username: process.env.USER_EMAIL,
      password: process.env.USER_PASSWORD
    },

    setupNodeEvents(on, config) {
      if (process.env.CI) {
        if (!config.baseUrl) throw new Error("❌ BASE_URL missing");
        if (!config.env.username || !config.env.password)
          throw new Error("❌ USER_EMAIL / USER_PASSWORD missing");
      }
      return config;
    }
  }
});
