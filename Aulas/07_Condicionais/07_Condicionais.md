# O que são condicionais?

Condicionais servem para o código tomar decisões.

👉 Pense assim:
“SE algo acontecer, FAÇA isso. SENÃO, faça outra coisa.”

Exemplo do mundo real

```
Se estiver chovendo, eu levo guarda-chuva.
Senão, saio sem guarda-chuva.
```
É exatamente isso que o código faz.

## Condicional if

Usada para executar algo se uma condição for verdadeira.

```javascript
const idade = 18;

if (idade >= 18) {
  console.log("Pode entrar");
}
```

## if + else

Quando existe um caminho alternativo.

```javascript
const idade = 16;

if (idade >= 18) {
  console.log("Pode entrar");
} else {
  console.log("Entrada proibida");
}
```

## if, else if, else

Quando existem várias decisões possíveis.

```javascript
const nota = 7;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

## Condicional switch

Usada quando você compara um mesmo valor com várias opções.

```javascript
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
```

## Operador ternário (forma curta)

Uma versão curta do if/else.

```javascript
const idade = 20;

const mensagem = idade >= 18
  ? "Maior de idade"
  : "Menor de idade";

console.log(mensagem);
```

**✅ Condicionais permitem que o código tome decisões com base em regras.**