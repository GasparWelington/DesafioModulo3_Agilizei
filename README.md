Desafio n°2 do chapter iv do Agilizei Bootcamp 

Essa será a aplicação que vamos Automatizar.

![site](https://user-images.githubusercontent.com/94000549/144846724-815e7652-8bc1-40e6-a6c9-8ecee4fcc207.png)


A empresa Thunders, precisa garantir a integridade e a disponibilidade de seus serviços para clientes através de uma página de cadastro em seu site - automation practice.

Essa funcionalidade é a de cadastro de clientes em seu e-commerce, que possui diversos produtos disponíveis, categorias e promoções. Diariamente, novos clientes chegam ao site e precisam efetuar um cadastro para que possam comprar seus produtos, por isso essa funcionalidade é crítica para o negócio.

Para garantir a integridade deste serviço, você deve construir um teste automatizado que simule a jornada de usuário ao realizar um cadastro. Crie um novo projeto, faça as devidas configurações e desenvolva os scripts necessários para completar essa tarefa.


Importante
os dados devem ser diferentes entre um teste e outro
não esqueça de adicionar asserções ao seu teste
utilizar o mochawesome como relatório de execução
subir o projeto no Github e enviar o link para correção
seu projeto deve ter um README, com descrição, GIF da execução e como executar
o repositório do desafio deve ser público, para fins de avaliação
não esqueça do arquivo .gitignore
não esqueça da execução no Github Actions
o relatório deve ser de fácil acesso, usando o Github Pages#


Passo a passo para configurar o projeto:

PRÉ REQUISITOS

Antes de prosseguir, primeiro certifique-se de ter instalado:

.Node
.Git

* Baixe o projeto no Github:
* Acessar o diretório root do projeto (que tem a pasta Cypress), instalar as dependências e abrir o Cypress Runner:
 PASSOS PARA INSTALAÇÃO:

# .npm install
# ./node_modules/.bin/cypress open

OBS: 
Para executar os testes em modo headless, rode o comando npm run cy:run
Para gerar e agrupar os relatórios você deve rodar os comandos npm run report:merge e em seguida npm run report:mocha
Para limpar os arquivos gerados nos relatórios você pode rodar também npm run report:clean

*******************************************************************************

Após isso, é só escolher a spec desejada e assistir a execução dos testes.

![image](https://user-images.githubusercontent.com/94000549/144837566-b83a05d2-0909-42c5-bcba-b44cb446f89a.png)







![Hnet com-image](https://user-images.githubusercontent.com/94000549/144837171-d2c560e5-d3fc-4363-a34d-e00703261c67.gif)


Você também pode executar o projeto direto pelo GitHub Actions, basta acessar a aba Actions" desse repositório.


link do relatório gerado:   https://gasparwelington.github.io/DesafioModulo3_Agilizei/


