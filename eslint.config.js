import js from "@eslint/js";
import globals from "globals";
export default [
  js.configs.recommended,
  { files: ["script.js"], languageOptions: { globals: globals.browser } },
  {
    files: ["scripts/**/*.mjs", "tests/**/*.mjs", "eslint.config.js"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["tests/browser.mjs"],
    languageOptions: { globals: globals.browser },
  },
];
