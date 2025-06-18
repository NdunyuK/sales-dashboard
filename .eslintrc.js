// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended', // only if using Vue 3
  ],
  plugins: ['vue'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Customize Airbnb rules if needed
    'no-console': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.js',
        '**/*.spec.js',
        '**/vite.config.js',
        '**/webpack.config.js',
      ],
      optionalDependencies: false,
      peerDependencies: false,
      packageDir: ['./'], // ensure ESLint resolves packages correctly
    }],
  },
};
