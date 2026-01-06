import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.js';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // use jsdom environment to simulate a browser-like environment
      environment: 'jsdom',

      // Global test APIs like describe, it, expect without importing
      globals: true,

      // Setup files to run before each test file
      setupFiles: ['./src/test/setup.js'],

      // Where to look for test files
      include: ['src/**/*.{test,spec}.{js,jsx}'],

      // Coverage configuration
      coverage: {
        provider: 'v8', // use v8 for faster coverage
        reporter: ['text', 'html'],
        exclude: ['node_modules/', 'src/test/'],
      },
    },
  })
);
