/// <reference types="cypress" />

describe('Main Game screen', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('with single player setup | size: 4x4', () => {
    beforeEach(() => {
      cy.get('button').click().wait(1000);
    });

    it('should reveal 2 cards and increase moves score', () => {
      for (let i = 0; i < 2; i++) {
        cy.dataCy('gameCard').eq(i).click().find('span').should('be.visible');
      }
      cy.contains(/moves/i)
        .parent()
        .find('p:last-child')
        .should('have.text', 1);
    });

    it('should reveal all cards with 8 moves', () => {
      for (let i = 0; i < 8; i++) {
        cy.revealCardPair(i);
      }
      cy.contains(/moves/i)
        .parent()
        .find('p:last-child')
        .should('have.text', 8);

      cy.contains(/you did it/i)
        .wait(1000)
        .should('be.visible');
    });
  });

  context('with multi player setup | players: 4, size: 4x4', () => {
    beforeEach(() => {
      cy.contains(/2/i).click();
      cy.contains(/4x4/i).click();
      cy.get('button').click();
      cy.wait(1000);
    });

    it('should reveal a pair and add a point', () => {
      cy.revealCardPair(0);
      cy.contains(/p1/i).parent().find('p:last-child').should('have.text', 1);
    });

    it('should add 1 point to second player', () => {
      cy.findCardPair(0).eq(0).click();
      cy.findCardPair(1).eq(0).click();

      cy.revealCardPair(2);
      cy.contains(/p2/i).parent().find('p:last-child').should('have.text', 1);
    });
  });

  context('with multi player setup | players: 4, size: 4x4', () => {
    beforeEach(() => {
      cy.contains(/4/i).click();
      cy.contains(/4x4/i).click();
      cy.get('button').click();
      cy.wait(1000);
    });

    it('should add 1 point to 2nd player and 3 points to 4th player', () => {
      cy.findCardPair(0).eq(0).click();
      cy.findCardPair(1).eq(0).click();

      cy.revealCardPair(2);
      cy.findCardPair(3).eq(0).click();
      cy.findCardPair(4).eq(0).click();

      cy.findCardPair(3).eq(0).click();
      cy.findCardPair(4).eq(0).click();

      cy.revealCardPair(3);
      cy.revealCardPair(4);
      cy.revealCardPair(5);
      cy.revealCardPair(6);

      cy.contains(/p2/i).parent().find('p:last-child').should('have.text', 1);
      cy.contains(/p4/i).parent().find('p:last-child').should('have.text', 4);
    });
  });

  context(
    'with multi player setup | theme: icons, players: 2, size: 6x6',
    () => {
      beforeEach(() => {
        cy.contains(/icons/i).click();
        cy.contains(/2/i).click();
        cy.contains(/6x6/i).click();
        cy.get('button').click();
        cy.wait(1000);
      });

      it('should finish game with scores: P1: 1, P2: 17', () => {
        cy.dataCy('gameCard')
          .find('>i')
          .then((icons) => {
            let allIcons = [];
            icons.each((i, el) => {
              allIcons.push(el.classList[2]);
            });
            allIcons = [...new Set(allIcons)];
            cy.wrap(allIcons).as('allIcons');
          });

        cy.get('@allIcons').then((allIcons) => {
          cy.revealIconCardPair(allIcons[0]);
          cy.findIconCardPair(allIcons[1]).eq(0).click();
          cy.findIconCardPair(allIcons[2]).eq(0).click();

          for (let i = 1; i < allIcons.length; i++) {
            cy.revealIconCardPair(allIcons[i]);
          }
        });

        cy.contains(/p1/i).parent().find('p:last-child').should('have.text', 1);
        cy.contains(/p2/i)
          .parent()
          .find('p:last-child')
          .should('have.text', 17);

        cy.contains(/player 2 wins/i)
          .wait(1000)
          .should('be.visible');
      });
    }
  );

  it('should restart the game for single player', () => {
    cy.get('button').click();
    cy.wait(1000);

    cy.revealCardPair(0);
    cy.contains(/moves/i).parent().find('p:last-child').should('have.text', 1);

    cy.contains(/restart/i).click();

    cy.contains(/moves/i).parent().find('p:last-child').should('have.text', 0);
    cy.contains(/time/i)
      .parent()
      .find('p:last-child')
      .should('have.text', '0:00');
    cy.dataCy('gameCard').find('span').should('be.not.visible');
  });

  it('should restart the game for multi player', () => {
    cy.contains(/2/i).click();
    cy.contains(/4x4/i).click();
    cy.get('button').click();
    cy.wait(1000);

    cy.revealCardPair(0);
    cy.findCardPair(1).eq(0).click();
    cy.findCardPair(2).eq(0).click();

    cy.revealCardPair(4);
    cy.revealCardPair(5);

    cy.contains(/P1/i).parent().find('p:last-child').should('have.text', 1);
    cy.contains(/P2/i).parent().find('p:last-child').should('have.text', 2);

    cy.contains(/restart/i).click();

    cy.contains(/P1/i).parent().find('p:last-child').should('have.text', 0);
    cy.contains(/P2/i).parent().find('p:last-child').should('have.text', 0);
    cy.dataCy('gameCard').find('span').should('be.not.visible');
  });

  it('should start new game', () => {
    cy.get('button').click();
    cy.wait(1000);

    cy.contains(/new game/i).click();
    cy.contains(/start game/i).should('be.visible');
    cy.contains(/select theme/i).should('be.visible');
  });
});
