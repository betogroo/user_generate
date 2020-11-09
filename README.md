# user_generate

Api de geração de usuários para testes em desenvolvimento.

## Endpoints

### GET /user-generate
Este endpoint retorna um array de usuários, com os seguintes campos:

* _key_: Número de ordem do registro, começando em 0 (zero)
* _id_: ID do usuário, sendo um conjunto de 8 dígitos, url-safe
* _name_: Nome do Usuário, em caixa alta
* _rg_: Número que representa o RG, com 8 dígitos
* _cpf_: Número que representa um CPF válido, para fins de testes e validações
* _password_: Senha criptografada
* _email_: Email, com o nome e sobrenome do usuário, seguido de um número aleatório e um domínio aleatório
* _birthDate_: Data de Nascimento, no fomrmato YYYY/MM/DD
* _gender_: Sexo do usuário, no formato M ou F


