module.exports = {
  env: {
    es6: true,
  },
  extends: ["next/core-web-vitals", "plugin:sort/recommended"],
  overrides: [
    {
      files: ["**/*.types.ts"],
      rules: {
        "unused-imports/no-unused-vars": "off",
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "import/first": "off",
        "import/newline-after-import": "off",
        "import/no-duplicates": "off",
        "simple-import-sort/exports": "off",
        "simple-import-sort/imports": "off",
        "sort/destructuring-properties": "off",
        "sort/export-members": "off",
        "sort/exports": "off",
        "sort/import-members": "off",
        "sort/imports": "off",
        "sort/object-properties": "off",
        "sort/type-properties": "off",
        "unused-imports/no-unused-imports": "off",
        "unused-imports/no-unused-vars": "off",
      },
    },
  ],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["import", "simple-import-sort", "sort", "unused-imports"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "simple-import-sort/exports": "off",
    "simple-import-sort/imports": "error",
    "sort/destructuring-properties": "error",
    "sort/export-members": "error",
    "sort/exports": "error",
    "sort/import-members": "error",
    "sort/imports": "off",
    "sort/object-properties": "error",
    "sort/type-properties": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
  },
};
