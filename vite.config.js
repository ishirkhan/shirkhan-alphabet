const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    minify: true,
    outDir: "dist",
    sourcemap: false,
    lib: {
      name: "shirkhan-alphabet",
      entry: path.resolve(__dirname, "src/alphabet/index.ts"),
      fileName: (format) => `shirkhan-alphabet.${format}.js`,
    },
    rollupOptions: {},
  },
});
