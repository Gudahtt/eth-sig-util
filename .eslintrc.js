module.exports = {
  root: true,
  extends: ['@metamask/eslint-config', '@metamask/eslint-config-nodejs'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['@metamask/eslint-config-typescript'],
    },
    {
      files: ['*.test.js'],
      extends: ['@metamask/eslint-config-jest'],
    },
  ],
  plugins: ['jsdoc'],
  rules: {
    camelcase: [
      'error',
      {
        allow: [
          'nacl_decodeHex',
          'recoverTypedSignature_v4',
          'signTypedData_v4',
        ],
      },
    ],
    'no-param-reassign': 'off',

    // TODO: Migrate these rules into the main ESLint config
    'jsdoc/check-access': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/check-line-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': 'error',
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/match-description': [
      'error',
      { tags: { param: true, returns: true } },
    ],
    'jsdoc/multiline-blocks': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-bad-blocks': 'error',
    'jsdoc/no-defaults': 'error',
    'jsdoc/no-multi-asterisks': 'error',
    'jsdoc/no-types': 'error',
    'jsdoc/require-asterisk-prefix': 'error',
    'jsdoc/require-description': 'error',
    'jsdoc/require-hyphen-before-param-description': [
      'error',
      'always',
      { tags: { returns: 'never' } },
    ],
    'jsdoc/require-jsdoc': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param': ['error', { unnamedRootBase: ['options'] }],
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-property': 'error',
    'jsdoc/require-property-description': 'error',
    'jsdoc/require-property-name': 'error',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-yields': 'error',
    'jsdoc/require-yields-check': 'error',
    'jsdoc/tag-lines': 'error',
  },
  ignorePatterns: ['!.eslintrc.js', 'test/*.js', 'dist'],
};
