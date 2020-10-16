// Whilst the configuration object can be modified here, the recommended way of making
// changes is via the presets' options or Neutrino's API in `.neutrinorc.js` instead.
// Neutrino's inspect feature can be used to view/export the generated configuration.
const neutrino = require("neutrino");
const { join } = require("path");

module.exports = neutrino(
  require(join(process.cwd(), ".neutrinorc.web.js"))
).webpack();
