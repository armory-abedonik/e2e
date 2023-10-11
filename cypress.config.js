const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chrome') {
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push('--disable-gpu');
        }

        if (browser.family === 'electron') {
          launchOptions.devTools = false;
        }

        return launchOptions;
      });
    },
  },
});
