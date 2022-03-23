const {
  propertyOrdering,
  selectorOrdering,
} = require('stylelint-semantic-groups')

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  plugins: ['stylelint-order'],
  rules: {
    /* see https://github.com/theKashey/stylelint-semantic-groups */
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering,
    'declaration-empty-line-before': null, // Avoid contradiction
  },
}
