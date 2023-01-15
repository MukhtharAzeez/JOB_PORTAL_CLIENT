module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".ts", ".tsx", ".js", ".jsx"] },
    ],
    "require-jsdoc": 0,
    "spaced-comment": [
      "error",
      "always",
      {
        markers: ["/"],
      },
    ],
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
