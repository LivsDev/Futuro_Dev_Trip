const express = require('express');
const app = express();
const PORT = 3555;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Bem-vindo! Acesse os arquivos estáticos pela URL.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
