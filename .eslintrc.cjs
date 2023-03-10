module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ["build/**", "coverage/**"],
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
  ],
  rules: {
    "import/no-anonymous-default-export": [
      "error",
      { allowAnonymousFunction: true },
    ],
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: true,
      typescript: true,
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  overrides: [
    {
      /**
       * Typescript files (see https://typescript-eslint.io/docs/)
       */
      files: ["**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
      ],
      rules: {
        "import/named": "off",
        "import/namespace": "off",
        "import/default": "off",
        "import/no-named-as-default-member": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-floating-promises": [
          "error",
          {
            ignoreVoid: true,
            ignoreIIFE: true,
          },
        ],
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: {
              arguments: false,
              attributes: false,
            },
          },
        ],
      },
    },
    {
      /**
       * Test files
       */
      files: ["**/*.test.{js,jsx,ts,tsx}"],
      extends: ["react-app/jest"],
      rules: {
        "jest/prefer-spy-on": "warn",
      },
    },
  ],
};
