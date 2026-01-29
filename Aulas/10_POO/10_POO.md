# O que é POO?

Programação Orientada a Objetos é uma forma de programar pensando em objetos do mundo real.

👉 Em vez de pensar só em funções soltas, você pensa em coisas:
- pessoa
- produto
- carro
- aluno
Cada coisa tem:
- características (dados)
- ações (comportamentos)

Exemplo simples (objeto)

```javascript
const pessoa = {
  nome: "Adriano",
  idade: 30,
  falar() {
    console.log("Olá!");
  }
};
```

**📌 Aqui:**
- nome e idade → características
- falar() → ação

## Classes (o molde do objeto)

Uma classe é um molde para criar objetos.

👉 Pense como uma fábrica de objetos.

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}
```
**Criando objetos a partir da classe**

```javascript
const pessoa1 = new Pessoa("Adriano", 30);
const pessoa2 = new Pessoa("Maria", 25);

pessoa1.falar();
pessoa2.falar();
```

Conceitos básicos da POO (bem simples)

**🧱 Classe**
- O modelo do objeto.

**🧍 Objeto**
- Uma instância da classe (algo criado a partir do molde).

**🧠 Atributos**
- As informações do objeto (nome, idade).

**⚙️ Métodos**
- As funções do objeto (falar()).

Exemplo do mundo real

```javascript
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
```

### Por que usar POO?
- código mais organizado
- reutilização
- facilita manutenção
- representa melhor o mundo real

***✅ POO é programar pensando em objetos, que possuem dados e comportamentos.***