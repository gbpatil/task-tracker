import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
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

  // 2. Source files (React/Browser)
  {
    files: ['src/**/*.{js,jsx}'],
    ignores: ['src/**/*.test.{js,jsx}', 'src/**/*.spec.{js,jsx}'],

    languageOptions: {
      ...sharedLanguageOptions,
      globals: {
        ...globals.browser,
      },
    },

    plugins: sharedPlugins,

    rules: {
      ...sharedReactRules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      semi: ['warn', 'always'],
      quotes: ['warn', 'single'],
    },

    settings: sharedReactSettings,
  },

  // 3. Test files (Vitest/Jest)
  {
    files: ['src/**/*.test.{js,jsx}', 'src/**/*.spec.{js,jsx}'],

    languageOptions: {
      ...sharedLanguageOptions,
      globals: {
        ...globals.browser,
        ...globals.jest,
        vi: 'readonly',
      },
    },

    plugins: sharedPlugins,

    rules: {
      ...sharedReactRules,
      'no-unused-vars': 'warn',
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
        ...globals.node, // provides access to Node.js global variables in config files
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
