class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  mostrarPreco() {
    console.log(`Preço: R$ ${this.preco}`);
  }
}

const produto = new Produto("Notebook", 3500);
produto.mostrarPreco();
