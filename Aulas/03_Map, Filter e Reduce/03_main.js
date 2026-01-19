const numeros = [1, 2, 3, 4];

// Map
const dobrados = numeros.map((n) => n * 2); // [2, 4, 6, 8]
console.log(`Dobrando os valores - ${dobrados}`);

// Filter
const pares = numeros.filter((n) => n % 2 === 0); // [2, 4]/
console.log(`Filtrando valores pares - ${pares}`);

// Reduce
const soma = numeros.reduce((total, n) => total + n, 0); // 10
console.log(`Somando os valores - ${soma}`);

// Exemplo do Mundo Real
const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Boné", preco: 30 },
];

// map → pegar só os preços
const precos = produtos.map((p) => p.preco); // [50, 200, 30]
console.log(`Recuperando os preços - ${precos}`);

// filter → produtos acima de 50
const caros = produtos.filter((p) => p.preco > 50); // { nome: "Tênis", preco: 200 }
caros.forEach((p) => {
  console.log(`O produto ${p.nome} custa R$ ${p.preco}.`);
});

// reduce → total da compra
const total = produtos.reduce((soma, p) => soma + p.preco, 0); // 280
console.log(`Valor total - ${total}`);
