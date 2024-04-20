// Importar o express
const express = require('express');
const app = express();
const PORT = 3555;

// Middleware para registrar as solicitações
app.use((req, res, next) => {
    const now = new Date();
    console.log(`${now.toLocaleString()} - ${req.method} ${req.url}`);
    next();
});

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Página Inicial');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

