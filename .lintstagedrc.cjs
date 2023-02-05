module.exports = {
  "*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "*.(c)[jt]s?(x)": [
    "eslint",
    "yarn test --watchAll=false --bail --findRelatedTests",
  ],
  "*.?(s)css": "stylelint",
};
