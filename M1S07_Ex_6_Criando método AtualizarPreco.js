class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // Método para vender o produto
    vender(quantidadeVendida) {
        if (quantidadeVendida > this.quantidade) {
            console.log("Estoque insuficiente");
        } else {
            this.quantidade -= quantidadeVendida;
            console.log(`${quantidadeVendida} unidades de ${this.nome} vendidas com sucesso. Estoque restante: ${this.quantidade}`);
        }
    }

    // Método para repor o estoque do produto
    repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;
        console.log(`${quantidadeReposta} unidades de ${this.nome} repostas. Estoque atual: ${this.quantidade}`);
    }

    // Método para mostrar a quantidade disponível no estoque
    mostrarEstoque() {
        console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`);
    }

    // Método para atualizar o preço do produto
    atualizarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`O preço do produto ${this.nome} foi atualizado para R$${this.preco}`);
    }
}

// Criando uma instância da classe Produto
let produto = new Produto("Caneta Bic Azul", 0.50, 5);

// Atualizando e exibindo o novo preço
produto.atualizarPreco(0.75);
produto.mostrarEstoque(); // Exibe a quantidade atual e confirma o novo preço.
