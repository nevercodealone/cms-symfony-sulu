/// <reference types="Cypress" />
describe('Visual regression', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visually validates startpage', () => {
    cy.wait(Cypress.env('timeoutPageload'));
    cy.percySnapshot('Startpage');
  });

});
