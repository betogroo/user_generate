const randomID = require('crypto-random-string')
const { cpf } = require('cpf-cnpj-validator')
const bcrypt = require('bcryptjs')
const {  getRandomPeople } = require ('../../helpers/generates')




class LogController {

    index(req, res){
        var { amount } = req.params
        if (!amount || amount === undefined) {
            amount = 10
        }
        const data = []
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
res.json(data)
    }


}

module.exports = new LogController