# O que é uma lista (Array) no JavaScript?

Uma lista é um jeito de guardar vários valores dentro de uma única variável.

👉 Pense como uma caixa com várias coisas dentro.

Exemplo:
Em vez de criar várias variáveis:

```js
const fruta1 = "Maçã";
const fruta2 = "Banana";
const fruta3 = "Uva";
```

Você cria uma lista:

```js
const frutas = ["Maçã", "Banana", "Uva"];
```

Você pode ter listas de:

**✅ números**

```js
const numeros = [10, 20, 30];
```

**✅ textos**

```js
const nomes = ["Ana", "João", "Maria"];
```

**✅ misturado**

```js
const coisas = ["Caneta", 10, true];
```

## Posição (índice) — como acessar um item da lista

Cada item tem uma posição.

⚠️ Importante: a lista começa no 0

```js
const frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas[0]); // "Maçã"
console.log(frutas[1]); // "Banana"
console.log(frutas[2]); // "Uva"
```

👉 Pense assim:

- 0 = primeiro item
- 1 = segundo item
- 2 = terceiro item

## Como mudar um item da lista

```js
const frutas = ["Maçã", "Banana", "Uva"];

frutas[1] = "Morango";
console.log(frutas); // ["Maçã", "Morango", "Uva"]
```

## Principais ações com listas (as mais importantes)

**✅ Ver o tamanho da lista**

```js
const frutas = ["Maçã", "Banana", "Uva"];
console.log(frutas.length); // 3
```

**✅ Adicionar no final**

```js
frutas.push("Melancia");
```

**✅ Remover do final**

```js
frutas.pop();
```

**✅ Adicionar no começo**

```js
frutas.unshift("Abacaxi");
```

**✅ Remover do começo**

```js
frutas.shift();
```

## Exemplo completo simples

```js
const alunos = ["Ana", "Pedro", "João"];

alunos.push("Maria"); // adiciona no final
console.log(alunos.length); // 4
console.log(alunos[0]); // "Ana"
```

### Para fixação de conhecimento

**_✅ Array (lista) é uma variável que guarda vários valores organizados em sequência, onde cada valor tem uma posição._**
