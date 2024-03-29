/// <reference types="Cypress" />

describe('Header Category Navigation', () => {
    it('should navigate to Headphones page', () => {
        cy.visit('/');
        cy.get('header [href="/audiophile-ecommerce/headphones"]').click({
            force: true,
        });
        cy.url().should(
            'eq',
            'http://localhost:5173/audiophile-ecommerce/headphones'
        );
    });

    it('should navigate to Speakers page', () => {
        cy.visit('/');
        cy.get('header [href="/audiophile-ecommerce/speakers"]').click({
            force: true,
        });
        cy.url().should(
            'eq',
            'http://localhost:5173/audiophile-ecommerce/speakers'
        );
    });

    it('should navigate to Speakers page', () => {
        cy.visit('/');
        cy.get('header [href="/audiophile-ecommerce/earphones"]').click({
            force: true,
        });
        cy.url().should(
            'eq',
            'http://localhost:5173/audiophile-ecommerce/earphones'
        );
    });
});

describe('Footer Category Navigation', () => {
    it('should navigate to Headphones page', () => {
        cy.visit('/');
        cy.get('footer [href="/audiophile-ecommerce/headphones"]').click({
            force: true,
        });
        cy.url().should(
            'eq',
            'http://localhost:5173/audiophile-ecommerce/headphones'
        );
    });

    it('should navigate to Speakers page', () => {
        cy.visit('/');
        cy.get('footer [href="/audiophile-ecommerce/speakers"]').click({
            force: true,
        });
        cy.url().should(
            'eq',
            'http://localhost:5173/audiophile-ecommerce/speakers'
        );
    });

    it('should navigate to Speakers page', () => {
        cy.visit('/');
        cy.get('footer [href="/audiophile-ecommerce/earphones"]').click({
            force: true,
        });
        cy.url().should(
            'eq',
            'http://localhost:5173/audiophile-ecommerce/earphones'
        );
    });
});
