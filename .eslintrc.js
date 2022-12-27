module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'linebreak-style': 0,
    'indent': [2, 2, {
      ClassDeclaration: 3,
      ClassExpression: 3,
  }],
  },
};
