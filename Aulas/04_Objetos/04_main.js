const person = {
  firstName: "Adriano",
  lastName: "Silva",
  age: 37,
  careca: true,
  email: "adrianoleitedasilva@outlook.com",
  hobbies: [
    "Ler",
    "Escrever",
    "Assistir Filmes e Séries",
    "Estar com família e amigos",
  ],
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const email = person.email;
// const hobbies = person.hobbies[3];

// Mesma coisa que acima, mas de uma forma mais limpa
// Destructuring
const { firstName, lastName, age, careca, email, hobbies } = person;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(careca);
console.log(email);
console.log(hobbies[3]);

// Adicionando elementos novos ao objeto
person.dog = "Pastor Alemão";
console.log(person.dog);

// Outro Exemplo
const toDos = [
  {
    id: 1,
    description: "Estudar JavaScript",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Enviar todos os estudos para o Github",
    isCompleted: false,
  },
  {
    id: 3,
    description: "Estudar Versionamento de Código",
    isCompleted: true,
  },
];

// Desafio: acessar a lista e imprimir no console a description do item 3
const descriptionLastItemToDo = toDos[2].description;

console.log(descriptionLastItemToDo);
