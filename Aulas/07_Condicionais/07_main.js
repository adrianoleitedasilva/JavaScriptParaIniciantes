const idade = 18;

// Condicional IF
if (idade >= 18) {
  console.log("Pode entrar");
}

// Condicional IF + ELSE
if (idade >= 18) {
  console.log("Pode entrar");
} else {
  console.log("Entrada proibida");
}

// Condicional IF, ELSE IF e ELSE
const nota = 7;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// Condicional SWITCH
const dia = "segunda";

switch (dia) {
  case "segunda":
    console.log("Início da semana");
    break;
  case "sexta":
    console.log("Sextou!");
    break;
  default:
    console.log("Outro dia");
}

// Condicional TERNÁRIO
const mensagem = idade >= 18
  ? "Maior de idade"
  : "Menor de idade";

console.log(mensagem);