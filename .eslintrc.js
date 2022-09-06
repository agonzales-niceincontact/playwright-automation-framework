module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  ignorePatterns: ["framework/api/models/*.ts"],
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["camelCase", "PascalCase"],
      },
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "public-static-method",
          "protected-static-method",
          "private-static-method",
        ],
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
      },
    ],
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": [
      "error",
      {
        objects: "always-multiline",
        arrays: "always-multiline",
        functions: "never",
        imports: "only-multiline",
      },
    ],
    "dot-notation": "error",
    "import/order": "off",
    // "indent": ["error", 2],
    "max-classes-per-file": ["error", 2],
    "max-lines": ["error", 180],
    "max-statements": ["error", 30],
    "max-lines-per-function": [
      "error",
      {
        max: 30,
      },
    ],
  },
};
