# Tipos de Dados

## O que são tipos de dados?

Em JavaScript, tipo de dado é o “tipo de informação” que você guarda numa variável.

Exemplo:

- um número (10)
- um texto (“Olá”)
- verdadeiro/falso (true/false)

✅ Resumo: é o formato do valor.

## Principais tipos de dados em JavaScript (os mais usados)

### 1) String (texto)

Tudo que é texto fica entre aspas.

📌 Exemplo:

```js
const nome = "Adriano";
const frase = "Olá, mundo!";
```

✅ Usado para: nomes, frases, mensagens, textos em geral.

### 2) Number (número)

Inclui números inteiros e decimais.

📌 Exemplo:

```js
const idade = 30;
const preco = 19.9;
```

### 3) Boolean (verdadeiro ou falso)

Só pode ser:

- true (verdadeiro)
- false (falso)

📌 Exemplo:

```js
const estaLogado = true;
const temDesconto = false;
```

✅ Usado para: validações, condições, decisões.

### 4) Undefined (ainda não tem valor)

Quando uma variável foi criada mas não recebeu valor.

📌 Exemplo:

```js
let cor;
console.log(cor); // undefined
```

👉 Pense assim:
undefined = “a variável existe, mas está vazia”

### 5) Null (vazio de propósito)

É quando você define que algo é vazio intencionalmente.

📌 Exemplo:

```js
let usuario = null;
```

👉 Pense assim:
null = “não tem valor, mas eu decidi isso”

Tipos mais comuns para “estrutura” de dados

### 6) Array (lista)

Uma lista de valores.

📌 Exemplo:

```js
const frutas = ["maçã", "banana", "uva"];
```

✅ Usado para: lista de itens, lista de nomes, produtos etc.

### 7) Object (objeto)

Um conjunto de informações organizadas.

📌 Exemplo:

```js
const pessoa = {
  nome: "Adriano",
  idade: 30,
  cidade: "SP",
};
```

✅ Usado para: pessoas, produtos, usuários, qualquer coisa com atributos.

## “Como eu descubro o tipo?”

Você pode usar:

```js
console.log(typeof nome);
```

📌 Exemplo:

```js
console.log(typeof "oi"); // string
console.log(typeof 10); // number
console.log(typeof true); // boolean
```

## Regra simples (pra leigos entenderem)

📌 O tipo de dado depende do valor.

- "10" é texto (string)
- 10 é número (number)

✅ Isso é MUITO importante no JS.
