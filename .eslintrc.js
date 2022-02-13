module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "airbnb/hooks",
    "prettier",
  ],
  plugins: ["react", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  globals: {
    JSX: "readonly",
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-underscore-dangle": ["off"],
    "func-names": ["error", "always", { generators: "never" }],
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "no-restricted-exports": "off",
    "default-param-last": "off",
    quotes: ["error", "double"],
    semi: "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
