/// <reference types="Cypress" />

describe('Checkout', () => {
    beforeEach(() => {
        cy.visit('/headphones/1');
        cy.get('.product-details__cart-btn').click();
        cy.get('.header__cart-container').click();
        cy.get('#checkout-btn').click();
        cy.reload();
    });

    it('should display billing input fields', () => {
        cy.get('#name').should('be.visible');
        cy.get('#email').should('be.visible');
        cy.get('#phone').should('be.visible');
    });

    it('should display shipping input fields', () => {
        cy.get('#address').should('be.visible');
        cy.get('#zip').should('be.visible');
        cy.get('#city').should('be.visible');
        cy.get('#country').should('be.visible');
    });

    it('should display payment options', () => {
        cy.get('.checkout__input--emoney').should('be.visible');
        cy.get('.checkout__input--cash').should('be.visible');
    });

    it('should display summary', () => {
        cy.get('.checkout__summary-value--sub-total').should('be.visible');
        cy.get('.checkout__summary-value--shipping').should('be.visible');
        cy.get('.checkout__summary-value--vat').should('be.visible');
        cy.get('.checkout__summary-value--grand-total').should('be.visible');
        cy.get('.checkout__summary-btn').should('be.visible');
    });

    it('should display related fields for e-Money option', () => {
        cy.get('.checkout__input--emoney > .input-radio__label').click();
        cy.get('#emoneyNumber').should('be.visible');
        cy.get('#emoneyPin').should('be.visible');
    });

    it('should not submit without entering information', () => {
        cy.get('.checkout__summary-btn').should('be.disabled');
    });
});
