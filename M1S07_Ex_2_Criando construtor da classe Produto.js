class produto {
    constructor (nome, preço, quantidade){
        this.nome = nome; // Atributo para nome do produto
        this.preço = preco; // Atributo para preço do produto
        this.quantidade; // Atributo para a quantidade em estoque
    };
};

class Produto {
    // Construtor da classe Produto
    constructor(nome, preco, quantidade) {
        this.nome = nome;           // Atributo para armazenar o nome do produto
        this.preco = preco;         // Atributo para armazenar o preço do produto
        this.quantidade = quantidade;  // Atributo para armazenar a quantidade em estoque
    }
}

// Criando uma instância da classe com valores iniciais
let meuProduto = new Produto("Notebook", 2500.00, 15);

// Exibindo os valores do produto
console.log(`Nome: ${meuProduto.nome}, Preço: R$${meuProduto.preco}, Quantidade: ${meuProduto.quantidade}`);
