# O que são Map, Filter e Reduce?

São funções usadas em listas (arrays) para trabalhar com vários dados de forma simples e organizada, sem precisar de for.

👉 Pense assim:

- **map** → transforma
- **filter** → filtra
- **reduce** → resume

## 🧩 map — transformar itens

Usado quando você quer mudar cada item da lista.

Exemplo:

```js
const numeros = [1, 2, 3, 4];

const dobrados = numeros.map((n) => n * 2);
// [2, 4, 6, 8]
```

**👉 Regra simples:**
map entra com uma lista e devolve outra do mesmo tamanho.

##🧩 filter — filtrar itens

Usado quando você quer manter apenas alguns itens da lista.

Exemplo:

```js
const numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter((n) => n % 2 === 0);
// [2, 4]
```

**👉 Regra simples:**
filter devolve só o que passa na regra.

##🧩 reduce — resumir tudo em um valor

Usado quando você quer juntar todos os valores em um único resultado.

Exemplo:

```js
const numeros = [1, 2, 3, 4];

const soma = numeros.reduce((total, n) => total + n, 0);
// 10
```

**👉 Regra simples:**
reduce transforma uma lista em um único valor.

### Comparação rápida (pra fixar)

```shell
map     → transforma cada item
filter  → escolhe alguns itens
reduce  → junta tudo em um resultado
```

## Exemplo do mundo real

```js
const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Boné", preco: 30 },
];

// map → pegar só os preços
const precos = produtos.map((p) => p.preco);

// filter → produtos acima de 50
const caros = produtos.filter((p) => p.preco > 50);

// reduce → total da compra
const total = produtos.reduce((soma, p) => soma + p.preco, 0);
```
