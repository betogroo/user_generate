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

#### Exemplo:

__/user-generate/5

```
{
  "amount": 5,
  "users": [
    {
      "key": 0,
      "id": "superAdm",
      "name": "ADMINISTRADOR DO SISTEMA",
      "rg": "000000000",
      "cpf": "00000000000",
      "password": "$2a$10$rea89xN81l3ZYeAE9B4O2OAu4eMXVghiM591JKdyY/RJAC6dTJKAC",
      "email": "admin@api.deb.br",
      "birthDate": "2000/01/01",
      "gender": "M"
    },
    {
      "key": 1,
      "id": "hDtUW_jq",
      "name": "AMÁBILE GARCIA",
      "rg": "64337727",
      "cpf": "00304078182",
      "password": "$2a$10$tWxvnVWF4VjRnD.OtQzP7ON.CUeP.5KphH2tK37njcIgIp5VKJKb2",
      "email": "amabile.garcia75@lodeloca.com",
      "birthDate": "2000-06-07",
      "gender": "F"
    },
    {
      "key": 2,
      "id": "jIAx9iMQ",
      "name": "ALEXANDRE VIANA",
      "rg": "04829597",
      "cpf": "57736858250",
      "password": "$2a$10$P7312YWwWOJB2SwpcVZsSumdUrxRKLH9igsfTPwI/piglBsBM4c5G",
      "email": "alexandre_viana97@api.dev.br",
      "birthDate": "1987-02-11",
      "gender": "M"
    },
    {
      "key": 3,
      "id": "j0d9moeh",
      "name": "CASSIANO IGOR RODRIGUES",
      "rg": "19361341",
      "cpf": "70108428680",
      "password": "$2a$10$vW75qOS9lhA.1N1apye/jeG8ypA7S4eyFweBG3IzZ122wN9g.SCyu",
      "email": "cassiano-rodrigues22@devnode.br",
      "birthDate": "1996-06-25",
      "gender": "M"
    },
    {
      "key": 4,
      "id": "-fxYk7Kl",
      "name": "MARIA MARIANA CAMARGO",
      "rg": "67884744",
      "cpf": "36865771516",
      "password": "$2a$10$Oxi0ecwwe81FA7Dfr8dlq./JW1vu7AkFTaNwsazNJD26use45rhh.",
      "email": "maria.camargo9@gunbound.com",
      "birthDate": "1986-11-27",
      "gender": "F"
    }
  ]
}

```