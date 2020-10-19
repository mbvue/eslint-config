module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/vue",
  ],

  parserOptions: {
    ecmaVersion: 11,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },

  plugins: ["@typescript-eslint"],

  rules: {
    'no-var': 'error',
  },
};
