/// <reference types="Cypress" />

describe('Homepage Navigation', () => {
    it('should navigate to the homepage on start', () => {
        cy.visit('/');
        cy.url().should('eq', 'http://localhost:5173/audiophile-ecommerce/');
    });

    it('should navigate to the homepage when clicking on the header logo', () => {
        cy.visit('/');
        cy.get('.navigation__item').first().click({ force: true });
        cy.get('.header__logo').click();
        cy.url().should('eq', 'http://localhost:5173/audiophile-ecommerce/');
    });

    it('should navigate to the homepage when clicking on the footer logo', () => {
        cy.visit('/');
        cy.get('.navigation__item').first().click({ force: true });
        cy.get('.footer__logo').click();
        cy.url().should('eq', 'http://localhost:5173/audiophile-ecommerce/');
    });
});
