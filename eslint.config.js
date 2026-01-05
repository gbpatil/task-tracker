import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Base javascript recommended rules
  js.configs.recommended,

  // config for our source files
  {
    files: ['src/**/*.{js,jsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser, // browser global variables like `window` and `document`
        ...globals.jest, // Jest global variables like `describe` and `it`
        vi: 'readonly', // Vitest's mock/spy utility
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // enable JSX parsing
        },
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },

    rules: {
      // react plugin rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',

      // react hooks plugin rules
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

      // General rules
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      semi: ['warn', 'always'],
      quotes: ['warn', 'single'],
    },

    settings: {
      react: {
        version: 'detect', // automatically detect the react version from package.json
      },
    },
  },

  // ignore patterns
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // Prettier config - MUST BE LAST!
  eslintConfigPrettier,
];
