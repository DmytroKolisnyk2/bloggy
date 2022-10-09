module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
    'plugin:@next/next/recommended',
    "../../.eslintrc.js",
  ],
  plugins: ["react", "react-hooks", "jsx-a11y"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "jsx-a11y/anchor-is-valid": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/order": [
      "error",
      {
        groups: ["external", "builtin", "parent", ["sibling", "index"]],
      },
    ],
    "import/newline-after-import": ["error", { count: 1 }],

    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
      },
    ],
    "padded-blocks": ["error", "never"],
    "lines-between-class-members": ["error", "always"],
    "newline-before-return": "error",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],
    "arrow-body-style": ["error", "as-needed"],
    "prefer-arrow-callback": "error",
    "no-unused-vars": "off",
    semi: ["error", "always"],

    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
};
