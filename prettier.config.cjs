/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: "always",
  bracketSameLine: false,
  endOfLine: "lf",
  printWidth: 120,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  importOrder: [
    "^(@playwright/test/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "^types$",
    "^@libs/(.*)$",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
};
