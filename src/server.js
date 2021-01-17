const express = require('express');

const server = express();

// Template Engine.
const nunjucks = require("nunjucks");

nunjucks.configure("src/views", {

    express: server,

    noCache: true

});

server.use(express.static("public"));

// Página de login.
server.get("/", (request, response) => {

    return response.render("login.html")

});

// Página da Home Mother.
server.get("/home-mother", (request, response) => {

    return response.render("mother/home-mother.html")

});

// Liga o Servidor.
server.listen(3000); // Porta 3000.