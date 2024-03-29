/// <reference types="Cypress" />

describe('Example', () => {
    it('should visit the homepage', () => {
        cy.visit('http://localhost:5173/audiophile-ecommerce/');
    });
});
