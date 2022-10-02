module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'linebreak-style': 0,
    'react/prop-types': 0,
    'require-jsdoc': 0,
    'max-len': [
      2,
      {
        code: 100,
        ignoreComments: true,
      },
    ],
    'react/display-name': 1,
    'react/no-unescaped-entities': 1,
    'no-unused-vars': 1,
    'valid-jsdoc': 1,
    'camelcase': 'off',
    'no-console': 1,
  },
};
