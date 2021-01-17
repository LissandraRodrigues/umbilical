
const express = require("express")

// Cria o servidor.
const server = express()

// Configurar pasta pública.
server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

// Utilizando Template Engine.
const nunjucks = require("nunjucks")

nunjucks.configure("src/pages", {

    express: server,

    noCache: true

});

// Página de login.
server.get("/", (request, answer) => {

    return answer.render("login.html")

});

// Página da Home Mother.
server.get("/home-mother", (request, answer) => {

    return answer.render("home-mother.html")

});

// Liga o Servidor.
server.listen(3000); // Porta 3000.