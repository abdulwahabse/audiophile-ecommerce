/// <reference types="Cypress" />

describe('Cart', () => {
    beforeEach(() => {
        cy.visit('/headphones/1');
    });

    it('should update cart', () => {
        cy.contains('.product-details__quantity-btn', '+').click();
        cy.get('.product-details__cart-btn').click();
        cy.get('.header__cart-container').click();
        cy.get('.cart-popup__quantity-text').contains('2');
    });

    it('should increase and decrease quantity', () => {
        cy.contains('.product-details__quantity-btn', '+').click();
        cy.get('.product-details__quantity-text').contains('2');
        cy.contains('.product-details__quantity-btn', '+').click();
        cy.contains('.product-details__quantity-btn', '-').click();
        cy.contains('.product-details__quantity-btn', '-').click();
        cy.get('.product-details__quantity-text').contains('1');
    });

    it('should reset cart', () => {
        cy.contains('.product-details__quantity-btn', '+').click();
        cy.get('.product-details__cart-btn').click();
        cy.get('.header__cart-container').click();
        cy.get('.cart-popup__empty-cart-btn').click();
        cy.get('.cart-popup__empty-cart-container').should('be.visible');
    });

    it('should add correct product', () => {
        cy.get('.product-details__heading').then((heading) => {
            const productName = new RegExp(heading, 'i');
            cy.contains('.product-details__quantity-btn', '+').click();
            cy.get('.product-details__cart-btn').click();
            cy.get('.header__cart-container').click();
            cy.get('.cart-popup__product-name').contains(productName);
        });
    });
});
