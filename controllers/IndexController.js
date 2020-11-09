
const { DateTime } = require("luxon")



class IndexController {

  
async index(req, res){
    res.json(
        {  
            "title": "API de geração de Usuários",
            "versão": '1.0.0',
            "Método": 'GET',
            "Retorno": "Status 200: Array de usuários gerados aleatoriamente (mínimo de 1, máximo de 100",
            "Dados Retornados": {
                "id": "UUID",
                "name": "Nome de pessoa aleatória, em caixa alta",
                "rg": "Rg de pessoa aleatório, com 8 dígitos",
                "cpf": "CPF Válido, gerado aleatoriamente",
                "password": "Password criptografado, onde o valor real é o RG gerado.",
                "email": "Email, com nome + um sinal separador + sobrenome + número aleatório",
                "birthDate": "Data de nascimento válida, aleatória, de 01/01/1936 a 31/12/2003",
                "gender": "Gênero, (M ou F)"
            },
            "url": "https://user-generate.herokuapp.com/user-generate/{quantidade}",
            "parâmetro": [
                {
                    "nome": 'quantidade', "tipo": 'Inteiro', 'requerido': 'Não', 
                    "obs": [
                            'Se não for passado parâmetro a quantidade padrão de nomes gerados é 10 (dez)',
                            'Se o parâmetro não for um número a quantidade gerada será 10 (dez)',
                            'Se o parâmetro foi negativo, a quantidade gerada será 10 (10)',
                            'Se o parâmetro for número decimal, será considerado apenas o inteiro',
                            'Se o parâmetro for maior que 100, serão gerados apenas 100 registros',
                            'O primeiro registro é gerado com dados estáticos'
                            
                    ]
                }
            ],
            "Primeiro Registro": 
                {
                                id: 'superAdm',
                                name: 'ADMINISTRADOR DO SISTEMA',
                                rg: '000000000',
                                cpf: '00000000000',
                                password: 'admin',
                                email: 'admin@api.deb.br',
                                birthDate: '2000/01/01',
                                gender: 'M'}
            
            
        }
)
}
}

module.exports = new IndexController()