/// <reference types = "cypress" />

context('Validar menus', () => {
    it('clicando no link comprar deve direcionar para a página de compra', () => {
        cy.visit('http://lojaebac.ebaconline.art.br')
        //ALIAS
        //cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar')
        //cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink')
        //cy.get('@comprarMenuLink').contains('Comprar')
        //cy.get('@comprarMenuLink').click()

        //Combinando ações
        //cy.get('@comprarMenuLink').contains('Comprar')
        cy.get('@comprarMenuLink').contains('Comprar').and('have.attr', 'href').and('include', 'shop')
        cy.get('@comprarMenuLink').click()

        //cy.contains('Produtos')
        //cy.url().contains('shop')

        //Should
        cy.get('.page-title').should('contain', 'Produtos')
    }) 
});