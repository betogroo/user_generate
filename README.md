# user_generate

Api de geração de usuários para testes em desenvolvimento.

## Endpoints

### GET /user-generate
Este endpoint retorna um array de usuários, com os seguintes campos:

* key: Número de ordem do registro, começando em 0 (zero)
* id: ID do usuário, sendo um conjunto de 8 dígitos, url-safe
* name: Nome do Usuário, em caixa alta
* rg: Número que representa o RG, com 8 dígitos
* cpf: Número que representa um CPF válido, para fins de testes e validações
* password: Senha criptografada
* email: Email, com o nome e sobrenome do usuário, seguido de um número aleatório e um domínio aleatório
* birthDate: Data de Nascimento, no fomrmato YYYY/MM/DD
* gender: Sexo do usuário, no formato M ou F


