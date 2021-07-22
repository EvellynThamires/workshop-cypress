/// <reference types = 'cypress' />

context('Compra', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    });

    it('Simular compra', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.page-title').should('contain', 'Produtos')
        
        cy.get('.post-2559').click()
        
        cy.get('.button-variable-item-M').click().and('have.attr', 'title').and('include', 'M')
        cy.get('.button-variable-item-Red').click().and('have.attr', 'title').and('include', 'Red')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.page-title').should('contain', 'Carrinho')
        cy.get('.cart_item > .product-name')
        cy.get('.actions > .clearfix > .pull-right').click()
        
        cy.get('.checkout-button').click()
        cy.get('.page-title').should('contain', 'Checkout')
        cy.get('#billing_first_name').type('Evellyn')
        cy.get('#billing_last_name').type('Uyemura')
        //cy.get('#select2-billing_country-container')
        cy.get('#billing_address_1').type('Rua xxxxxxx, xxx')
        cy.get('#billing_city').type('São Paulo')
        cy.get('#billing_postcode').type('00000-000')
        cy.get('#billing_phone').type('00000-0000')
        cy.get('#billing_email').type('xxxxxxxxx@gmail.com')
        cy.get('#place_order').click()

    })
});