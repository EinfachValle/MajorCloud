// import { defineConfig } from 'cypress';
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8080',
  },
})
