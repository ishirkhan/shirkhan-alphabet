module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3.18",
        targets: { node: "current" },
      },
    ],
    "@babel/preset-typescript",
  ],
};
