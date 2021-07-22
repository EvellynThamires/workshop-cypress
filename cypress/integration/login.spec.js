/// <reference types = 'cypress' />

import LoginPage from '../support/pageObjects/login'
import MinhaContaPage from '../support/pageObjects/minhaConta'

//Utilizando js
const data = require('../fixtures/user.json')

context('Login', () => {

    //Utilizando fixture
    let data;
    before(() => {
        cy.fixture('user').then(dadosUsuario => {
            data = dadosUsuario;
        })
    });

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    });

    it('com usuário cadastrado redirecionar para a página de Minha Conta', () => {
        cy.get('.icon-user-unfollow').click()
        //cy.get('#username').type('eshi')
        //cy.get('#password').type('teste@123')

        //Const
        //cy.get('#username').type(data.usuario)
        //cy.get('#password').type(data.senha)

        //Fixture Cypress
        //cy.get('#username').type(data.usuario)
        //cy.get('#password').type(data.senha)
        //cy.get('.woocommerce-form > .button').click()

        //cy.get('a > .hidden-xs').should('contain', 'Welcome Eshi Cruz !')

        //Page Objects
        //LoginPage.login(data.usuario, data.senha)
        //MinhaContaPage.getUsuarioLogado().should('contain', 'Welcome Eshi Cruz !')

        //Commands
        cy.login(data.usuario, data.senha)
        cy.mensagemBoasVindas().should('contain', 'Welcome Eshi Cruz !')
    });
});