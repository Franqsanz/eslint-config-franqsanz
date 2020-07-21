module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    mongo: true,
    serviceworker: true,
    jest: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    // 'airbnb',
    'prettier',
    'plugin:node/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    // 0 => "off", 1 => "warn", 2 => "error"
    'no-console': 0,
    'func-names': 0,
    'no-debugger': 0,
    'no-alert': 0,
    'no-unused-vars': 1,
    'no-const-assign': 2,
    'no-empty': 1,
    'no-undef': 0,
    'node/no-unpublished-require': 0,
    'node/no-missing-require': 2,
    'no-dupe-keys': 1,
    'no-shadow': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      2,
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
      },
    ],
  },
  plugins: ['html', 'prettier'],
};
