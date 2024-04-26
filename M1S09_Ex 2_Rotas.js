const express = require('express');
const app = express(); // criar uma aplicação express
const port = 3555;

app.get('/', (req, res) => { // definir uma rota raiz / rota home
  res.send('Olá Mundo!');
});

// Rota para a página Sobre
app.get('/sobre', (req, res) => {
    res.send('Esta é a página Sobre. Aqui, você encontrará informações sobre o nosso aplicativo e equipe.');
  });

// Rota para a página Contato
app.get('/contato', (req, res) => {
    res.send('Bem-vindo à página de Contato! Envie-nos um email para livia.carvalho@exemplo.com.');
  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
