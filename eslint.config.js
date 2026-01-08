import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

// Shared configurations
const sharedLanguageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

const sharedPlugins = {
  react: reactPlugin,
  'react-hooks': reactHooksPlugin,
};

const sharedReactRules = {
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'off',
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
};

const sharedReactSettings = {
  react: {
    version: 'detect',
  },
};

export default [
  // 1. Base javascript recommended rules
  js.configs.recommended,

  // 2. Source files (TypeScript + React)
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/**/*.test.{ts,tsx}', 'src/**/*.spec.{ts,tsx}'],

    languageOptions: {
      ...sharedLanguageOptions,
      parser: tsParser,
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      ...sharedPlugins,
      '@typescript-eslint': tseslint,
    },

    rules: {
      ...sharedReactRules,
      // Disable JS rules that TypeScript handles
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
    },

    settings: sharedReactSettings,
  },

  // 3. Test files (TypeScript + Vitest)
  {
    files: ['src/**/*.test.{ts,tsx}', 'src/**/*.spec.{ts,tsx}'],

    languageOptions: {
      ...sharedLanguageOptions,
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.jest,
        vi: 'readonly',
      },
    },

    plugins: {
      ...sharedPlugins,
      '@typescript-eslint': tseslint,
    },

    rules: {
      ...sharedReactRules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'off',
    },

    settings: sharedReactSettings,
  },

  // 4. Node.js config files
  {
    files: ['*.config.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'no-console': 'off',
    },
  },

  // 5. Ignore patterns
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // 6. Prettier config - MUST BE LAST!
  eslintConfigPrettier,
];
