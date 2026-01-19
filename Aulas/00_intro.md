# Introdução

## O que é JavaScript?

JavaScript é uma linguagem de programação que serve para dar “vida” aos sites e aplicativos.

Se um site fosse uma pessoa:

- HTML seria o esqueleto (estrutura: título, textos, botões)
- CSS seria a roupa e a aparência (cores, estilo, layout)
- JavaScript seria o cérebro e os músculos (ações e comportamento)

✅ Ou seja: JavaScript faz o site reagir ao que você faz.

Um exemplo bem fácil

Sem JavaScript, um site é quase sempre “parado”.

Com JavaScript, o site consegue:

- mostrar um aviso quando você clica num botão
- validar um formulário (ex: “senha fraca”)
- abrir um menu quando você toca no ícone ☰
- atualizar coisas na tela sem recarregar a página
- carregar produtos, comentários e vídeos dinamicamente

📌 Exemplo do dia a dia:

Quando você clica em “Adicionar ao carrinho” e aparece a mensagem “Produto adicionado”, isso normalmente é JavaScript.

JavaScript é só pra site?

Não. Hoje JavaScript é usado em muita coisa:

🌐 Na internet (Front-end)
Para criar sites interativos:

- Instagram (web)
- YouTube
- Facebook
- E-commerces

🧠 No servidor (Back-end)
Também dá pra usar JavaScript no “lado de trás” com Node.js, por exemplo:

- sistemas e APIs
- login e cadastro
- banco de dados

📱 Em aplicativos
Com tecnologias como React Native:

- apps Android e iOS

## Por que aprender JavaScript?

- É a linguagem de programação padrão de todos os navegadores
- Frameworks poderosos, como React, utilizar JavaScript
- Usado para desenvolvimento de aplicações fullstack(front-end e back-end)
- Usado para desenvolvimento mobile(React Native)
- Usado em aplicações desktop(Electron)
- Basicamente, está em toda a parte

## O que vamos aprender?

- Variáveis & Tipos de Dados
- Listas (arrays)
- Objetos
- JSON
- Loops (for, for of, while, forEach)
- Condicionais (if, else, switch, ternary)
- Funções & Arrow Functions
- Programação Orientada a Objetos
- Selecionar elementos do DOM
- Manipular elementos do DOM
- Eventos
- Criar & validar um formulário

# O que são var, let e const?

São formas de criar variáveis no JavaScript.

Variável é tipo uma caixinha com nome, onde você guarda um valor:

- número
- texto
- lista
- objeto etc

## let - A mais usada

Use quando o valor vai mudar.

📌 Exemplo:

```js
let idade = 20;
idade = 21; // pode mudar
```

👉 Pense assim:
let = “esse valor pode variar”

✅ Quando usar:

- contador
- pontuação
- valor que muda com o tempo
- resultado de cálculo

## const (a mais recomendada)

Use quando o valor não vai mudar.

📌 Exemplo:

```js
const nome = "Adriano";
```

👉 Pense assim:
const = “isso é constante”

✅ Quando usar:

- quase tudo por padrão
- valores fixos
- configurações
- funções
- listas e objetos (sim, pode!)

⚠️ Importante: const não significa que a lista/objeto é “congelado”, e sim que o “nome da variável” não pode apontar pra outro valor.

Exemplo:

```js
const lista = [1, 2, 3];
lista.push(4); // pode!
```

## ⚠️ var (evite)

É o jeito antigo de criar variáveis.

📌 Exemplo:

```js
var cidade = "SP";
```

**_❌ Problema do var:_**

- ele “vaza” escopo (pode causar bugs)
- tem comportamentos confusos
- hoje quase não se usa em projetos modernos

**_✅ Quando usar:_**

- só se você estiver mexendo em código antigo

## Regra simples pra nunca errar (bem prática)

- ✅ Use const sempre que puder
- ✅ Use let quando precisar mudar o valor
- ❌ Evite var

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

# O que é uma lista (Array) no JavaScript?

Uma lista é um jeito de guardar vários valores dentro de uma única variável.

👉 Pense como uma caixa com várias coisas dentro.

Exemplo:
Em vez de criar várias variáveis:

```js
const fruta1 = "Maçã";
const fruta2 = "Banana";
const fruta3 = "Uva";
```

Você cria uma lista:

```js
const frutas = ["Maçã", "Banana", "Uva"];
```

Você pode ter listas de:

**✅ números**

```js
const numeros = [10, 20, 30];
```

**✅ textos**

```js
const nomes = ["Ana", "João", "Maria"];
```

**✅ misturado**

```js
const coisas = ["Caneta", 10, true];
```

## Posição (índice) — como acessar um item da lista

Cada item tem uma posição.

⚠️ Importante: a lista começa no 0

```js
const frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas[0]); // "Maçã"
console.log(frutas[1]); // "Banana"
console.log(frutas[2]); // "Uva"
```

👉 Pense assim:

- 0 = primeiro item
- 1 = segundo item
- 2 = terceiro item

## Como mudar um item da lista

```js
const frutas = ["Maçã", "Banana", "Uva"];

frutas[1] = "Morango";
console.log(frutas); // ["Maçã", "Morango", "Uva"]
```

## Principais ações com listas (as mais importantes)

**✅ Ver o tamanho da lista**

```js
const frutas = ["Maçã", "Banana", "Uva"];
console.log(frutas.length); // 3
```

**✅ Adicionar no final**

```js
frutas.push("Melancia");
```

**✅ Remover do final**

```js
frutas.pop();
```

**✅ Adicionar no começo**

```js
frutas.unshift("Abacaxi");
```

**✅ Remover do começo**

```js
frutas.shift();
```

## Exemplo completo simples

```js
const alunos = ["Ana", "Pedro", "João"];

alunos.push("Maria"); // adiciona no final
console.log(alunos.length); // 4
console.log(alunos[0]); // "Ana"
```

### Para fixação de conhecimento

**_✅ Array (lista) é uma variável que guarda vários valores organizados em sequência, onde cada valor tem uma posição._**
