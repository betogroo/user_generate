
const { DateTime } = require("luxon")



class IndexController {

  
async index(req, res){
    res.send('app.dev.br')
}
}

module.exports = new IndexController()