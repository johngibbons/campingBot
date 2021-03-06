module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-await-in-loop': 'off',
    'no-underscore-dangle': 'off'
  }
};
