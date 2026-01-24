# O que são objetos em JavaScript?

Um objeto é uma forma de guardar várias informações relacionadas dentro de uma mesma variável.

👉 Pense como uma ficha de cadastro.

Exemplo: uma pessoa tem nome, idade, cidade…

Em vez de criar várias variáveis:

```javascript
const nome = "Adriano";
const idade = 30;
const cidade = "SP";
```

Você organiza tudo em um objeto:

```javascript
const pessoa = {
  nome: "Adriano",
  idade: 30,
  cidade: "SP",
};
```

## Como é a estrutura de um objeto?

Um objeto é formado por chave e valor:

```javascript
chave: valor;
```

Exemplo:

```javascript
const produto = {
  nome: "Notebook",
  preco: 3500,
  emEstoque: true,
};
```

## Como acessar valores do objeto?

✅ Forma 1 (mais comum) — ponto .

```javascript
console.log(produto.nome); // "Notebook"
console.log(produto.preco); // 3500
```

✅ Forma 2 — colchetes []

```javascript
console.log(produto["nome"]); // "Notebook"
```

## Como alterar valores?

```javascript
produto.preco = 3000;
```

## Como adicionar novas informações?

```javascript
produto.marca = "Dell";
```

## Por que objetos são tão usados?

Porque quase tudo no mundo real é representado como objeto:

- Usuário → nome, email, senha
- Produto → nome, preço, categoria
- Aluno → nome, turma, notas
- Post → título, autor, data

✅ Objetos deixam o código mais organizado e fácil de entender.
