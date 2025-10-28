module.exports = {
  extends: ['@mate-academy/eslint-config', 'plugin:cypress/recommended'],
  overrides: [
    {
      files: ['*.js', '*.ts'],
      rules: {
        'linebreak-style': 'off',
      },
    },
  ],
};
