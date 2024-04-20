const express = require('express');
const app = express();
const PORT = 3555;

app.use(express.json());

let users = []; // Este array simulará nosso "banco de dados"

app.post('/users', (req, res) => {
    const user = req.body;
    if (!user.name || !user.email) { // Checagem simples para garantir que os dados necessários estão presentes
        return res.status(400).send('Nome e email são obrigatórios.');
    }
    user.id = users.length + 1; // Atribuir um ID único ao novo usuário
    users.push(user); // Adicionar o usuário ao array
    res.status(201).send(user); // Retornar o status 201 e os dados do usuário
});

app.get('/users', (req, res) => { //Rota GET /users para retornar todos os usuário
    res.status(200).send(users);
});

app.get('/users/:id', (req, res) => { //Rota GET /users/:id para retornar um usuário específico
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('Usuário não encontrado');
    } else {
        res.status(200).send(user);
    }
});

app.put('/users/:id', (req, res) => { //Rota PUT para atualizar um usuário
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('Usuário não encontrado');
    } else {
        Object.assign(user, req.body);
        res.status(200).send(user);
    }
});

app.delete('/users/:id', (req, res) => { // rota delete para exclusão de usuários
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) {
        res.status(404).send('Usuário não encontrado');
    } else {
        users.splice(index, 1);
        res.status(200).send(`Usuário excluído com sucesso.`);
    }
});




app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
