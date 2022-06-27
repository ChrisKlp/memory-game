/// <reference types="cypress" />

describe('Main Game screen', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should start new game', () => {
    cy.get('button').click();
    for (let i = 0; i < 8; i++) {
      cy.revealCardPair(i);
    }

    cy.contains(/new game/i).click();
    cy.contains(/start game/i).should('be.visible');
    cy.contains(/select theme/i).should('be.visible');
  });

  context('with single player setup', () => {
    beforeEach(() => {
      cy.get('button').click().wait(1000);
      for (let i = 0; i < 8; i++) {
        cy.revealCardPair(i);
      }
    });

    it('should end game with 8 moves', () => {
      cy.contains(/you did it/i).should('be.visible');
      cy.contains(/moves taken/i)
        .parent()
        .find('span:last-child')
        .should('have.text', '8 Moves');
    });

    it('should restart the game', () => {
      cy.contains(/restart/i).click();
      cy.contains(/moves/i)
        .parent()
        .find('p:last-child')
        .should('have.text', 0);
      cy.contains(/time/i)
        .parent()
        .find('p:last-child')
        .should('have.text', '0:00');
      cy.dataCy('gameCard').find('span').should('be.not.visible');
    });
  });

  context('with multi player setup', () => {
    beforeEach(() => {
      cy.contains(/2/i).click();
      cy.contains(/4x4/i).click();
      cy.get('button').click();
      cy.wait(1000);
      for (let i = 0; i < 8; i++) {
        cy.revealCardPair(i);
      }
    });

    it('should end game with scores: P1:8, P2:0', () => {
      cy.contains(/player 1 wins/i).should('be.visible');
      cy.contains(/8 pairs/i)
        .parent()
        .find('p:first-child')
        .should('have.text', 'Player 1 (Winner!)');
      cy.contains(/player 2/i)
        .parent()
        .find('p:last-child')
        .should('have.text', '0 Pairs');
    });

    it('should restart the game', () => {
      cy.contains(/restart/i).click();
      cy.contains(/P1/i).parent().find('p:last-child').should('have.text', 0);
      cy.contains(/P2/i).parent().find('p:last-child').should('have.text', 0);
      cy.dataCy('gameCard').find('span').should('be.not.visible');
    });
  });
});
