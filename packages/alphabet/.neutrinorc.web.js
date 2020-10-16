const web = require("@neutrinojs/web");
const path = require("path");

module.exports = {
  use: [
    web({
      html: {
        template: path.join(__dirname, "template.html"),
      },
    }),
  ],
};
