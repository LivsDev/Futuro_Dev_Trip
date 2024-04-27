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
}

// Criando uma instância da classe Produto
let produto = new Produto("Teclado", 150.00, 10);

// Repor e vender produtos
produto.repor(20);   // Repor estoque
produto.vender(5);   // Venda bem-sucedida
