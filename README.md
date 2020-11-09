# user_generate

Api de geração de usuários para testes em desenvolvimento.

## Endpoints

### GET /user-generate/{quantidade-de-usuarios}
Este endpoint retorna um array de usuários, com os seguintes campos:

* __key__: Número de ordem do registro, começando em 0 (zero)
* __id__: ID do usuário, sendo um conjunto de 8 dígitos, url-safe
* __name__: Nome do Usuário, em caixa alta
* __rg__: Número que representa o RG, com 8 dígitos
* __cpf__: Número que representa um CPF válido, para fins de testes e validações
* __password__: Senha criptografada
* __email__: Email, com o nome e sobrenome do usuário, seguido de um número aleatório e um domínio aleatório
* __birthDate__: Data de Nascimento, no fomrmato YYYY-MM-DD
* __gender__: Sexo do usuário, no formato M ou F

É aceito um parâmetro para esta rota, no formato inteiro, que representa a quantidade de registros a serem criados.

Caso o parâmetro não seja informado, será retornado o valor padrão de 10 registos. Caso o valor do prâmetro seja maior que 100, serão retornados apenas 100 registros. Caso o parâmetro seja um número decimal, será considerado apenas o valor inteiro. Qualquer outro valor informado será considerado erro e serão retornados 10 registros.

### /
Este endpoint conte um objeto com as instruções de utilização.