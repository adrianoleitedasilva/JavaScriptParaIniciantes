console.log("Loops");

// Loop For
for (let index = 0; index <= 10; index++) {
  console.log(index);
}

// Percorrendo uma lista com For
const cars = ["Ferrari", "Tesla", "Mercedes", "Ford", "Fiat"];

console.log("Exemplo do For");
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// For of
const frutas = [
  "Abacaxi",
  "Banana",
  "Caju",
  "Figo",
  "Goiaba",
  "Jabuticaba",
  "Kiwi",
];
console.log("Exemplo do For of");
for (let fruta of frutas) {
  console.log(fruta);
}

// ForEach
const persons = ["Adriano", "Bruna", "Carolina", "Diego", "Emily", "Fernando"];

console.log("Exemplo do ForEach");

persons.forEach(function (person) {
  console.log(person);
});

// While
let indexWhile = 0;

while (indexWhile < 10) {
  console.log("Index é menor do que 10");
  // indexWhile = indexWhile + 1;
  // indexWhile += 1;
  indexWhile++;
}
// For In
// Não é performático, melhor usar os demais loops
const personagem = {
  name: "Capitão América",
  age: 92,
};

for (property in personagem) {
  (console.log(personagem), console.log(personagem[property]));
}
