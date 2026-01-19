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
