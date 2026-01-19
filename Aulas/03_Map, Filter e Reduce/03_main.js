const numeros = [1, 2, 3, 4];

// Map
const dobrados = numeros.map((n) => n * 2); // [2, 4, 6, 8]

// Filter
const pares = numeros.filter((n) => n % 2 === 0); // [2, 4]/

// Reduce
const soma = numeros.reduce((total, n) => total + n, 0); // 10

// Exemplo do Mundo Real
const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Boné", preco: 30 },
];

// map → pegar só os preços
const precos = produtos.map((p) => p.preco);

// filter → produtos acima de 50
const caros = produtos.filter((p) => p.preco > 50);

// reduce → total da compra
const total = produtos.reduce((soma, p) => soma + p.preco, 0);
