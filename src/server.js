const express = require('express');

const server = express();

// Template Engine.
const nunjucks = require("nunjucks");

nunjucks.configure("src/views", {

    express: server,

    noCache: true

});

server.use(express.static("public"));

// Página de Login.
server.get("/", (request, response) => {

    return response.render("login.html")

});

// Página da Home Mother.
server.get("/home-mother", (request, response) => {

    return response.render("mother/home-mother.html")

});

// Página de Agendamento de Mentorias.
server.get("/scheduling-mentoring", (request, response) => {

    return response.render("mother/scheduling-mentoring.html")

});

// Página de perfil da Mãe.
server.get("/profile", (request, response) => {

    return response.render("mother/profile.html")

});

// Página de trilha de desenvolvimento.
server.get("/trail", (request, response) => {

    return response.render("mother/trail.html")

});

// Página de Mentores.
server.get("/mentors", (request, response) => {

    return response.render("mother/mentors.html")

});

// Liga o Servidor.
server.listen(3000); // Porta 3000.