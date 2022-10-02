module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "google", "prettier", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    "linebreak-style": 0,
    "react/prop-types": 0,
    "require-jsdoc": 0,
    "max-len": [2, {
      code: 100,
      ignoreComments: true
    }],
    "react/display-name": 1,
    "react/no-unescaped-entities": 1,
    "no-unused-vars": 1,
    "valid-jsdoc": 1,
    camelcase: "off",
    "no-console": 1,
    "simple-import-sort/imports": [1, {
      groups: [// `react` first, `next` second, then packages starting with a character
      ["^react$", "^next", "^[a-z]"], // Packages starting with `@`
      ["^@"], // Packages starting with `~`
      ["^~"], // Imports starting with `../`
      ["^\\.\\.(?!/?$)", "^\\.\\./?$"], // Imports starting with `./`
      ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"], // Style imports
      ["^.+\\.s?css$"], // Side effect imports
      ["^\\u0000"]]
    }],
    "simple-import-sort/exports": "error"
  }
};