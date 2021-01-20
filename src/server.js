// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
const hbs = require('hbs');

hbs.registerPartials(path.join(__dirname, "views", "partials"));
// iniciando o express
const server = express()
server
    .use(express.urlencoded({ extended: true }))

    .use(express.static('public'))

    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    .get('/', pages.index)
    .get('/local', pages.local)
    .get('/locais', pages.locals)

server.listen(process.env.PORT || 5500)