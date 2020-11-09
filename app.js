const express = require("express")
const path = require('path')
const app = express()
const cors = require('cors')


const PORT = 3000

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
const IndexRouter = require('./routes/IndexRouter')
app.use('/', IndexRouter)
const UserGenerateRouter = require('./modules/UserGenerate/UserGenerateRouter')
app.use('/', UserGenerateRouter)

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`)
})

