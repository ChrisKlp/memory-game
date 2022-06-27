/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<Element>;

      /**
       * Custom command to find two cards with same value
       * @example cy.findCardPair(2)
       */
      findCardPair(value: number): Chainable<Element>;

      /**
       * Custom command to find two cards with same value and click them.
       * @example cy.revealCardPair(2)
       */
      revealCardPair(value: number): void;
    }
  }
}
