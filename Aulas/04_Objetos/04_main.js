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

const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const email = person.email;
const hobbies = person.hobbies[3];

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(email);
console.log(hobbies);
