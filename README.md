# Created-API-Node.js - API Back-End

O Created-API-Node.js é uma API desenvolvida com Node.js, PostgreSQL e Fastify, que fornece acesso a dados de personagens fictícios. detalharei a seguir o processo de criação desta API e as funcionalidades que oferece.

### Descrição Geral
O projeto consiste na implementação de uma API em Node.js que utiliza o banco de dados PostgreSQL para armazenar informações sobre personagens fictícios. A API foi implantada em um servidor público acessível por meio do endereço: https://created-api-node-js.onrender.com/characters.

Segue a imagem da tabela de banco de dados no https://neon.tech :
![site illustrato](https://lh3.googleusercontent.com/pw/ADCreHc0DycpnbdEJw60_vspApWnuyp_JESEe7IFXYsn1vs_oCFefkuZPFJdO8kpkDy3Ly1-XnKCELcF-4S4BO6wikcAL-1UxXRy6XljhMFtmttEQQR3XU6luJC6sXm3QJW5Fw7bMPOIkbFa_aov1m8eVJE=w1632-h724-s-no?authuser=1)

Segue a imagem dos dados devolvidos pelo servidor da api no https://render.com :
![site illustrato](https://lh3.googleusercontent.com/pw/ADCreHfOs95zYn9EFruOnl_FNHtpMsJ4QCX8I9Eoi-WT5HRkbgkh0Kxq6DM23OROBW7pv8YxLWFpQlQvGB7c4T-rt8Np21KuiieF5aUqyn2oYzzrYo-nYdd8UJWB7RrGIxqpKI6CfH9bOj_XohBvEOdHIc0=w1919-h645-s-no?authuser=1)

## Funcionalidades

Configuração do Servidor: 

- Foi criada toda a configuração do servidor utilizando o framework Fastify, que oferece alta performance e baixa latência.

Banco de Dados PostgreSQL: 
- A API utiliza o banco de dados PostgreSQL para armazenar informações dos personagens. A tabela do banco de dados foi configurada e hospedada no serviço da Neon Tech.

Acesso Público: 
- A API foi implantada no serviço Render, tornando-a acessível ao público em geral por meio do endereço https://created-api-node-js.onrender.com/characters.

#### Métodos de Requisição HTTP: 
A API oferece suporte a vários métodos de requisição HTTP incluindo:

- GET: Para recuperar informações dos personagens.
- POST: Para adicionar novos personagens à base de dados.
- PUT: Para atualizar informações de personagens existentes.
- DELETE: Para excluir personagens.

## Tecnologias Utilizadas

**Servidor:** NodeJs, PostgreSQL e Fastify


