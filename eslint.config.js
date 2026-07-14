const js = require('@eslint/js');
const globals = require('globals');
const react = require('eslint-plugin-react');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const reactHooks = require('eslint-plugin-react-hooks');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {jsx: true},
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
      prettier: prettierPlugin,
    },
    settings: {
      react: {version: 'detect'},
    },
    rules: {
      'no-console': 'off',
      'no-regex-spaces': 'off',
      'no-debugger': 'off',
      'no-unused-vars': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-undef': 2,
      'no-template-curly-in-string': 1,
      'consistent-return': 1,
      'array-callback-return': 1,
      eqeqeq: 2,
      'no-alert': 2,
      'no-caller': 2,
      'no-eq-null': 2,
      'no-eval': 2,
      'no-extend-native': 1,
      'no-extra-bind': 1,
      'no-extra-label': 1,
      'no-floating-decimal': 2,
      'no-implicit-coercion': 1,
      'no-loop-func': 1,
      'no-new-func': 2,
      'no-new-wrappers': 1,
      'no-throw-literal': 2,
      'prefer-promise-reject-errors': 2,
      'for-direction': 2,
      'getter-return': 2,
      'no-await-in-loop': 2,
      'no-compare-neg-zero': 2,
      'no-shadow-restricted-names': 2,
      'prefer-arrow-callback': 'off',
      'no-use-before-define': 'off',
      'no-param-reassign': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-react': 1,
      'react/jsx-uses-vars': 1,
      'react/prop-types': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
  {
    ignores: ['node_modules/**', '.next/**'],
  },
];
