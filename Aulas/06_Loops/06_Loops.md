# O que são loops?

Loops são usados quando você quer repetir uma ação várias vezes, sem precisar escrever o mesmo código de novo.

👉 Pense como:
“faça isso enquanto uma condição for verdadeira”

Exemplo do dia a dia

Se você quiser mostrar os números de 1 a 5:

❌ Sem loop (ruim):

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```
✅ Com loop (bom):

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

## Para que loops são usados?

- percorrer listas (arrays)
- repetir cálculos
- mostrar dados na tela
- automatizar tarefas repetitivas

## Principais tipos de loops em JavaScript

### 🔁 for

Usado quando você sabe quantas vezes quer repetir.

```javascript
for (let i = 0; i < 3; i++) {
  console.log("Olá");
}
```

### 🔁 while

Repete enquanto a condição for verdadeira.

```javascript
let contador = 0;

while (contador < 3) {
  console.log(contador);
  contador++;
}
```

### 🔁 for...of

Usado para percorrer itens de uma lista.

```javascript
const frutas = ["Maçã", "Banana", "Uva"];

for (const fruta of frutas) {
  console.log(fruta);
}
```

### 🔁 forEach

Forma moderna e simples de percorrer listas.

```javascript
const nomes = ["Ana", "João", "Maria"];

nomes.forEach((nome) => {
  console.log(nome);
});
```

