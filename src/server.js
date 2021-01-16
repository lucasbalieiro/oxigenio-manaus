// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
const bodyParser = require('body-parser');

// iniciando o express
const server = express()
server
    // utilizar body do req
    .use(express.urlencoded({ extended: true }))

    .use(bodyParser.json())

    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas da aplicaçao
    .get('/', pages.index)
    .get('/local', pages.orphanage)
    .get('/locais', pages.locals)
    .get('/adiciona-test', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(process.env.PORT || 5500)