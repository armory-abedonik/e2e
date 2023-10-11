const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: true,
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      on('before:browser:launch', (browser = {}, launchOptions) => {
        return launchOptions;
      });
    },
  },
});
