// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/simple-vue-app/')
    cy.contains('h1', 'You did it!')
  })
})
