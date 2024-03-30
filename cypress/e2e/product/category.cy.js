/// <reference types="Cypress" />

describe('Product Category Page', () => {
    it('should display headphones in headphones category page', () => {
        cy.visit('/headphones');
        cy.get('.product-card').each(($product) => {
            cy.wrap($product)
                .find('.product-card__heading')
                .contains(/headphones/i);
        });
    });

    it('should display speakers in speakers category page', () => {
        cy.visit('/speakers');
        cy.get('.product-card').each(($product) => {
            cy.wrap($product)
                .find('.product-card__heading')
                .contains(/speakers/i);
        });
    });

    it('should display earphones in earphones category page', () => {
        cy.visit('/earphones');
        cy.get('.product-card').each(($product) => {
            cy.wrap($product)
                .find('.product-card__heading')
                .contains(/earphones/i);
        });
    });
});
