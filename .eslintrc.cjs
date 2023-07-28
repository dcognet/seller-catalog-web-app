/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:react-hooks/recommended", "eslint:recommended", "plugin:import/recommended", "plugin:jsx-a11y/recommended", "plugin:testing-library/react", "plugin:security/recommended", "plugin:xss/recommended", "plugin:vitest/recommended", "prettier", "plugin:storybook/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  overrides: [{
    files: ["*.jsx", "*.js"]
  }],
  ignorePatterns: ["dist", "storybook-static", "coverage"],
  settings: {
    react: {
      version: "18.2"
    },
    "import/resolver": {
      alias: [["@", "./src"]]
    }
  },
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": ["warn", {
      allowConstantExport: true
    }]
  }
};