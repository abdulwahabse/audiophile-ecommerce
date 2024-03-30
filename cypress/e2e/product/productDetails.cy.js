/// <reference types="Cypress" />

describe('Product Details Page for Headphones', () => {
    beforeEach(() => {
        cy.visit('/headphones/1');
    });

    it('should display product heading', () => {
        cy.get('.product-details__heading').should('be.visible');
    });

    it('should display product description', () => {
        cy.get('.product-details__desription').should('be.visible');
    });

    it('should display product price', () => {
        cy.get('.product-details__price').should('be.visible');
    });

    it('should display cart button', () => {
        cy.get('.product-details__cart-container').should('be.visible');
    });

    it('should display product image', () => {
        cy.get('.product-details__image-container').should('be.visible');
    });

    it('should display features description', () => {
        cy.get('.product-details__features-heading').should('be.visible');
        cy.get('.product-details__features-description').should('be.visible');
    });

    it('should display included items', () => {
        cy.get('.product-details__included-heading').should('be.visible');
        cy.get('.product-details__included-items-container').should(
            'be.visible'
        );
    });
});

describe('Product Details Page for Speakers', () => {
    beforeEach(() => {
        cy.visit('/speakers/1');
    });

    it('should display product heading', () => {
        cy.get('.product-details__heading').should('be.visible');
    });

    it('should display product description', () => {
        cy.get('.product-details__desription').should('be.visible');
    });

    it('should display product price', () => {
        cy.get('.product-details__price').should('be.visible');
    });

    it('should display cart button', () => {
        cy.get('.product-details__cart-container').should('be.visible');
    });

    it('should display product image', () => {
        cy.get('.product-details__image-container').should('be.visible');
    });

    it('should display features description', () => {
        cy.get('.product-details__features-heading').should('be.visible');
        cy.get('.product-details__features-description').should('be.visible');
    });

    it('should display included items', () => {
        cy.get('.product-details__included-heading').should('be.visible');
        cy.get('.product-details__included-items-container').should(
            'be.visible'
        );
    });
});

describe('Product Details Page for Earphones', () => {
    beforeEach(() => {
        cy.visit('/earphones/1');
    });

    it('should display product heading', () => {
        cy.get('.product-details__heading').should('be.visible');
    });

    it('should display product description', () => {
        cy.get('.product-details__desription').should('be.visible');
    });

    it('should display product price', () => {
        cy.get('.product-details__price').should('be.visible');
    });

    it('should display cart button', () => {
        cy.get('.product-details__cart-container').should('be.visible');
    });

    it('should display product image', () => {
        cy.get('.product-details__image-container').should('be.visible');
    });

    it('should display features description', () => {
        cy.get('.product-details__features-heading').should('be.visible');
        cy.get('.product-details__features-description').should('be.visible');
    });

    it('should display included items', () => {
        cy.get('.product-details__included-heading').should('be.visible');
        cy.get('.product-details__included-items-container').should(
            'be.visible'
        );
    });
});
