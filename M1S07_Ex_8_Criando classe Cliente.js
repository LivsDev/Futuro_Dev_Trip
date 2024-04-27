// Definindo a classe base Pessoa
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Definindo a classe Cliente que herda de Pessoa
class Cliente extends Pessoa {
    constructor(nome, idade, telefone, email, clienteDesde) {
        super(nome, idade); // Chama o construtor da classe base (Pessoa)
        this.telefone = telefone;
        this.email = email;
        this.clienteDesde = clienteDesde; // Formato esperado "ANO-MES-DIA"
    }
}

// Criando uma instância da classe Cliente
let cliente1 = new Cliente("João Silva", 34, "9999-9999", "joao.silva@email.com", "2022-01-15");

// Exibindo informações do cliente
console.log(`Cliente: ${cliente1.nome}`);
console.log(`Idade: ${cliente1.idade}`);
console.log(`Telefone: ${cliente1.telefone}`);
console.log(`Email: ${cliente1.email}`);
console.log(`Cliente Desde: ${cliente1.clienteDesde}`);
