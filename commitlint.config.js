/* eslint-env node */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // HACK for "@semantic-release/git" generating too long commit message
  ignores: [(message) => /\[skip ci\]/.test(message)],
}
