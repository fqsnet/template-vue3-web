module.exports = {
  plugins: [],
  extends: ['stylelint-prettier/recommended', 'stylelint-config-standard', 'stylelint-config-recommended-vue'],
  rules: {
    'string-quotes': 'single',
    'property-no-vendor-prefix': null,
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
    'custom-property-pattern': null,
    'color-hex-length': 'short',
    'color-function-notation': null,
    'alpha-value-notation': null,
    'value-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'function-url-quotes': null,
    'no-missing-end-of-source-newline': true,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'function-no-unknown': null,
    'at-rule-no-unknown': null
  },
  overrides: [
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss'
    }
  ]
}
