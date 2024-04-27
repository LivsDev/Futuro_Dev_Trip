class Produto {
  nome;
  preco;
  quantidade;

  constructor(valorNome, valorPreco, valorQuantidade){
    this.nome = valorNome
    this.preco = valorPreco
    this.quantidade = valorQuantidade
  }

  Vender(quantidadeVendida){
    if(quantidadeVendida > this.quantidade){
      console.log("Estoque insuficiente!")
      console.log(`Existe apenas ${this.quantidade} unidades disponíveis`)
      return
    }
      
    // this.quantidade = this.quantidade - quantidadeVendida
    this.quantidade -= quantidadeVendida
  }

  Repor(quantidadeReposta){
    this.quantidade += quantidadeReposta
  }

  MostrarEstoque(){
    console.log(`O produto ${this.nome} custa R$ ${this.preco}\n e possui ${this.quantidade} unidades em estoque!`)
  }}; 
