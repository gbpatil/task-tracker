// .lintstagedrc.js - Industry-standard lint-staged configuration
export default {
  // JavaScript and JSX - lint and format check
  '*.{js,jsx}': ['eslint --max-warnings 0', 'prettier --check'],

  // TypeScript (if you add it later)
  // '*.{ts,tsx}': ['eslint --max-warnings 0', 'prettier --check'],

  // Styles
  '*.css': ['prettier --check'],

  // Data/Config files
  '*.json': ['prettier --check'],

  // Documentation
  '*.md': ['prettier --check'],

  // HTML (if any)
  '*.html': ['prettier --check'],
};
