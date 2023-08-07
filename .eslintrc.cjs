/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  // Based on ESLint and typescript-eslint
  // See https://eslint.org/docs/latest/rules/
  // and https://typescript-eslint.io/rules/
  rules: {
    /* ESLint 8.45.0 */
    // Possible Problems
    // See https://eslint.org/docs/latest/rules/#possible-problems
    "array-callback-return": "error",
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-new-native-nonconstructor": "error",
    "no-promise-executor-return": "error",
    "no-template-curly-in-string": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-unreachable-loop": "error",
    "no-unused-private-class-members": "error",
    "require-atomic-updates": "warn",

    // Suggestions
    // See https://eslint.org/docs/latest/rules/#suggestions
    // complexity: ["error", 10],
    "default-case-last": "error",
    // eqeqeq: "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "guard-for-in": "warn",
    "logical-assignment-operators": "error",
    "max-classes-per-file": "error",
    "max-depth": "error",
    // TODO: Make error and reduce to 500
    "max-lines": ["warn", 1000],
    // TODO: Make error
    "max-lines-per-function": [
      "warn",
      { max: 100, skipBlankLines: true, skipComments: true, IIFEs: true },
    ],
    // TODO: Make error
    "max-nested-callbacks": ["warn", 3],
    "max-params": ["error", 5],
    "new-cap": "error",
    // "no-alert": "error",
    "no-caller": "error",
    // "no-console": "error",
    "no-else-return": "error",
    "no-empty-static-block": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    // "no-implicit-coercion": ["error", { string: false }],
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-undef-init": "error",
    "no-unneeded-ternary": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "object-shorthand": "error",
    "operator-assignment": "error",
    "prefer-arrow-callback": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-await": "error",
    "require-unicode-regexp": "error",
    // "sort-imports": "error",
    "spaced-comment": "error",
    strict: ["error", "never"],
    "symbol-description": "error",
    yoda: "error",

    /* typescript-eslint */
    // Supported Rules
    // See https://typescript-eslint.io/rules/#supported-rules
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": ["error", "array-simple"],
    "@typescript-eslint/class-literal-property-style": "error",
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/consistent-indexed-object-style": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    "@typescript-eslint/consistent-type-exports": [
      "error",
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      [
        {
          selector: "default",
          format: ["strictCamelCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: "variable",
          format: ["strictCamelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "property",
          format: null,
        },
        {
          selector: "enumMember",
          format: ["UPPER_CASE"],
        },
      ],
    ],
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    // TODO: Make error
    // > This rule will not work as expected if `strictNullChecks` is not enabled.
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/unified-signatures": "error",

    // Extension Rules
    // See https://typescript-eslint.io/rules/#extension-rules
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-magic-numbers": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-unused-expressions": "error",

    "@typescript-eslint/no-unused-vars": "error",

    // Shadowing is generally a bad practice, but there is a common usage
    // pattern with Vuetify for which it is turned off. That is, the activator
    // slot object destructure to get `props` (`#activator="{ props }"`),
    // which is also commonly declared on components.
    "vue/no-template-shadow": "off",
    "vue/v-on-event-hyphenation": "error",
    // Vuetify also uses slot modifiers in a good way. This rule is mostly
    // aimed at allowing VDataTable slot syntax `#item.<field>`.
    "vue/valid-v-slot": ["error", { allowModifiers: true }],
  },
};
