console.log("Arrays são listas");

// Criando uma lista
const frutas = ["Maçã", "Banana", "Uva"];
const numeros = [10, 20, 30];
const nomes = ["Ana", "João", "Maria"];
const coisas = ["Caneta", 10, true];

// Acessando itens de uma lista
console.log(frutas[0]); // "Maçã"
console.log(frutas[1]); // "Banana"
console.log(frutas[2]); // "Uva"

// Alterando um item de uma posição
console.log(frutas); // Verificando antes de modificar
frutas[1] = "Morango";
console.log(frutas); // ["Maçã", "Morango", "Uva"]

// Ver o tamanho da lista
console.log(frutas.length); // 3

// Adicionar no final
frutas.push("Melancia");

// Remover do final
frutas.pop();

// Adicionar no começo
frutas.unshift("Abacaxi");

// Remover do começo
frutas.shift();

// Outro exemplo
const alunos = ["Ana", "Pedro", "João"];

alunos.push("Maria"); // adiciona no final
console.log(alunos.length); // 4
console.log(alunos[0]); // "Ana"

// Usando indexOf
console.log(nomes.indexOf("Ana")); // Retonará a posição do nome Ana, que deve ser a 0

// Sort
const nomesParaArrumar = ["Adriano", "João", "Ana", "Maria"];
const nomesOrganizados = nomesParaArrumar.sort();
console.log(nomesOrganizados);
