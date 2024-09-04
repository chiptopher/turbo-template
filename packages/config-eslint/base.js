module.exports = {
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "builtin",
            pattern: "react",
            position: "before",
          },

          {
            group: "internal",
            pattern: "@foghorn/**",
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
    "no-unused-vars": "off",
    "react/jsx-sort-props": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "sort-keys": "error",
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
    "unused-imports/no-unused-imports": "error",
  },
  plugins: ["typescript-sort-keys", "unused-imports", "import", "react"],
};
