///<reference types="cypress"/>
var Chance = require('chance');
var chance = new Chance();

import Logon from "../support/pages/Logon";





describe('Cadastro de Clientes', () => {
    
    beforeEach(() => {
        Logon.AcessarSite();
      });
    
    
    
    it('Quando eu cadastrar o cliente, então deve ser realizado o cadastro com sucessso', () => {

        Logon.RealizarCadastroCliente()
        
       
        


    });
});