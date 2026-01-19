## Exemplos de Introdução

**00_index.html**

```html
<!doctype html>
<html lang="pt_BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Curso de JavaScript</title>
  </head>
  <body>
    <script src="00_main.js"></script>
  </body>
</html>
```

**00_main.js**

```js
const message = "Oi, Mundo";
const firstName = "Adriano";
const lastName = "Silva";
const names = "Adriano, José, Reinaldo";

// Recuperando o tamanho de uma variável
console.log(message.length);

// Forma antiga = Concatenação raiz
console.log("Olá, meu nome é " + firstName + " " + lastName);

// Forma recente = Template String
console.log(`Olá, meu nome é ${firstName} ${lastName}`);

// Usando UPPER e LOWER
console.log(
  `Olá, meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`,
);

// Split de uma var
console.log(names.split(","));

// Splitando um nome
console.log(firstName.split(""));

// Para trabalhar com strings, recomendo ler o documento - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
```

**Tipos de Dados**

```js
//String
const nome = "Adriano";
const sobrenome = "Silva";
const frase = `Olá, ${nome}!`;

// Number
const idade = 30;
const preco = 19.9;
const negativo = -10;

// Boolean
const isAdmin = true;
const estaLogado = false;

// Undefined
let cidade;
console.log(cidade); // undefined

// Null
let usuario = null;
console.log(usuario); // null

// Array
const numeros = [1, 2, 3, 4];
const nomes = ["Ana", "João", "Maria"];
const misturado = [10, "texto", true];

// Object
const pessoa = {
  nome: "Adriano",
  idade: 30,
  ativo: true,
};

const produto = {
  nome: "Notebook",
  preco: 3500,
  emEstoque: false,
};

console.log(typeof nome); // "string"
console.log(typeof idade); // "number"
console.log(typeof isAdmin); // "boolean"
console.log(typeof cidade); // "undefined"
console.log(typeof usuario); // "object"  ⚠️ (bug histórico do JS)
console.log(typeof numeros); // "object" (arrays são objetos no JS)
console.log(typeof pessoa); // "object"
```
