/// <reference types="Cypress" />

describe('Product Details Navigation', () => {
    it('should navigate to product details page', () => {
        cy.visit('');
        cy.contains('a', /see product/i).click({ force: true });
        cy.reload();
        cy.get('.product-details__heading').should('be.visible');
        cy.get('.product-details__desription').should('be.visible');
        cy.get('.product-details__price').should('be.visible');
    });
});
