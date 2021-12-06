var Chance = require("chance");
var chance = new Chance();

import { groupCollapsed } from "console";

export const ELEMENTS = {
  Cadastro: {
    ConfirmarSeEstouNaPaginaCadastroCliente: "h3:contains(Create an account)",
    Email: "#email_create",
    CriarConta: "#SubmitCreate",
    // ConfirmarPaginaDePrencherDadosAbriu:':nth-child(1) > .page-subheading'
    ConfirmarPaginaDePrencherDadosAbriu:
      "h3:contains(Your personal information)",

    MarcarCheckMrs: "input[value=2]",
    Nome: "#customer_firstname",
    SobreNome: "#customer_lastname",
    Senha: "#passwd",
    Dia: "#days",
    Mes: "#months",
    Ano: "#years",
    Empresa: "#company",
    Endereco: "#address1",
    EndrecoAlternativo: "#address2",
    Cidade: "#city",
    UF: "#id_state",
    Pais: "#id_country",
    InformamacoesAdicionais: "#other",
    NumeroResidencial: "#phone",
    Cel: "#phone_mobile",
    EmailAlternativo: "#alias",
    ConfirmarRegistro: "#submitAccount",
    Cep: "#postcode",
    ValidarContaCadastrada: ".info-account",
  },
};
