const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // para parsing application/json

const tarefas = [];

// Middleware para validar dados de entrada
function validarDadosTarefa(req, res, next) {
    const { titulo, descricao, dataConclusao } = req.body;
    if (!titulo || !descricao || !dataConclusao) {
        return res.status(400).json({ erro: "Dados incompletos" });
    }
    next();
}

// Criar Tarefa
app.post('/tarefas', validarDadosTarefa, (req, res) => {
    const tarefa = { id: tarefas.length + 1, ...req.body };
    tarefas.push(tarefa);
    res.status(201).send(tarefa);
});

// Listar Tarefas
app.get('/tarefas', (req, res) => {
    res.status(200).json(tarefas);
});

// Atualizar Tarefa
app.put('/tarefas/:id', validarDadosTarefa, (req, res) => {
    const { id } = req.params;
    let tarefa = tarefas.find(t => t.id === parseInt(id));
    if (!tarefa) {
        return res.status(404).send('Tarefa não encontrada.');
    }
    tarefa = { ...tarefa, ...req.body };
    tarefas[tarefas.findIndex(t => t.id === parseInt(id))] = tarefa;
    res.status(200).send(tarefa);
});

// Excluir Tarefa
app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const index = tarefas.findIndex(t => t.id === parseInt(id));
    if (index === -1) {
        return res.status(404).send('Tarefa não encontrada.');
    }
    tarefas.splice(index, 1);
    res.status(204).send();
});

const PORT = 3555;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
