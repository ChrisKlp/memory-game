/// <reference types="cypress" />

describe('Start Game screen', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should start the game', () => {
    cy.get('button').click();
    cy.dataCy('gameCard').should('have.length', 16);
    cy.contains(/time/i).should('be.visible');
    cy.contains(/moves/i).should('be.visible');
  });

  it('should start game with setup = numbers; 2 players; 4x4', () => {
    cy.contains(/numbers/i).click();
    cy.contains(/2/i).click();
    cy.contains(/4x4/i).click();
    cy.get('button').click();
    cy.dataCy('gameCard').should('have.length', 16);
    cy.contains(/p1/i).should('be.visible');
    cy.contains(/p2/i).should('be.visible');
  });

  it('should start game with setup = icons; 4 players; 6x6', () => {
    cy.contains(/icons/i).click();
    cy.contains(/4/i).click();
    cy.contains(/6x6/i).click();
    cy.get('button').click();
    cy.dataCy('gameCard').should('have.length', 36);
    cy.contains(/p1/i).should('be.visible');
    cy.contains(/p2/i).should('be.visible');
    cy.contains(/p3/i).should('be.visible');
    cy.contains(/p4/i).should('be.visible');
  });
});
