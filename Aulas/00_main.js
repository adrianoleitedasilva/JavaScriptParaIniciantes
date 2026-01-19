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
