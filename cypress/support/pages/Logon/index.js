
const el = require("../Logon/elements").ELEMENTS;
var Chance = require('chance');
var chance = new Chance();

class Logon{

    AcessarSite(){
        cy.visit('http://automationpractice.com/index.php')

    };

    RealizarCadastroCliente(){
        cy.get('.login').click()
        cy.get(el.Cadastro.ConfirmarSeEstouNaPaginaCadastroCliente)
        .should('be.visible')
        cy.get(el.Cadastro.Email).type(chance.email())
        cy.get(el.Cadastro.CriarConta).click()
        cy.get(el.Cadastro.ConfirmarPaginaDePrencherDadosAbriu).
        should('have.text','Your personal information')
        cy.get(el.Cadastro.MarcarCheckMrs).check()
        cy.get(el.Cadastro.Nome).type(chance.first())
        cy.get(el.Cadastro.SobreNome).type(chance.last())
        cy.get(el.Cadastro.Senha).type('abc123')
        cy.get(el.Cadastro.Dia).select('10')
        .should('have.value','10')
        cy.get(el.Cadastro.Mes).select('12')
        .should('have.value','12')
        cy.get(el.Cadastro.Ano).select('1990')
        .should('have.value','1990')
        cy.get(el.Cadastro.Empresa).type(chance.company())
        cy.get(el.Cadastro.Endereco).type(chance.address())
        cy.get(el.Cadastro.EndrecoAlternativo).type(chance.address())
        cy.get(el.Cadastro.Cidade).type(chance.city())
        cy.get(el.Cadastro.UF).select('26')
        .should('have.value','26')
        cy.get(el.Cadastro.Cep).type('22222')
        cy.get(el.Cadastro.InformamacoesAdicionais).type(chance.address())
        cy.get(el.Cadastro.NumeroResidencial).type(chance.phone())
        cy.get(el.Cadastro.Cel).type(chance.phone())
        cy.get(el.Cadastro.EndrecoAlternativo).type(chance.address())
        cy.get(el.Cadastro.ConfirmarRegistro).click()
        cy.get(el.Cadastro.ValidarContaCadastrada)
        .should('have.text','Welcome to your account. Here you can manage all of your personal information and orders.')





    }




}














export default new Logon();