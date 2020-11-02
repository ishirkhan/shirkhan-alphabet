const web = require("@neutrinojs/web");
const path = require("path");

module.exports = {
  use: [
    web({
      html: {
        template: path.join(__dirname, "template.html"),
      },
    }),
    (neutrino) => {
      //去掉chunk
      neutrino.config.optimization.merge({
        splitChunks: {
          minSize: 5 * 1024 * 1024, //5Mb
        },
        runtimeChunk: false,
      });
    },
  ],
};
