const randomID = require('crypto-random-string')
const { cpf } = require('cpf-cnpj-validator')
const bcrypt = require('bcryptjs')
const {  getRandomPeople } = require ('../../helpers/generates')




class LogController {

    async index(req, res){
        var { amount } = req.params
        if (!amount || amount === undefined || isNaN(amount)) {
            amount = 10
        }
        if (amount > 100) {
            amount = 100
        }
        if (amount < 1) {
            amount = 10
        }
        amount = Math.trunc(amount)
        const data = []
            data[0] = {
                id: 'superAdm',
                name: 'ADMINISTRADOR DO SISTEMA',
                rg: '000000000',
                cpf: '00000000000',
                password: bcrypt.hashSync('admin', 10),
                email: 'admin@api.deb.br',
                birthDate: '2000/01/01',
                gender: 'M'
                }
        for (let i = 1; i < amount; i++) {
            var people = getRandomPeople()
            var name = people.fullName
            var email = people.email
            var rg = people.rg
            var birthDate = people.birthDate
            var gender = people.gender

            data[i] = {
                id: randomID({ length: 8, type: 'url-safe' }),
                name: name,
                rg: rg,
                cpf: cpf.generate(),
                password: bcrypt.hashSync(rg, 10),
                email: email,
                birthDate: birthDate,
                gender: gender
            }

        }
            res.json({amount, users: data})
    }


}

module.exports = new LogController