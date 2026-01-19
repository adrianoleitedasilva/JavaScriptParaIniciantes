# O que são var, let e const?

São formas de criar variáveis no JavaScript.

Variável é tipo uma caixinha com nome, onde você guarda um valor:

- número
- texto
- lista
- objeto etc

## let - A mais usada

Use quando o valor vai mudar.

📌 Exemplo:

```js
let idade = 20;
idade = 21; // pode mudar
```

👉 Pense assim:
let = “esse valor pode variar”

✅ Quando usar:

- contador
- pontuação
- valor que muda com o tempo
- resultado de cálculo

## const (a mais recomendada)

Use quando o valor não vai mudar.

📌 Exemplo:

```js
const nome = "Adriano";
```

👉 Pense assim:
const = “isso é constante”

✅ Quando usar:

- quase tudo por padrão
- valores fixos
- configurações
- funções
- listas e objetos (sim, pode!)

⚠️ Importante: const não significa que a lista/objeto é “congelado”, e sim que o “nome da variável” não pode apontar pra outro valor.

Exemplo:

```js
const lista = [1, 2, 3];
lista.push(4); // pode!
```

## ⚠️ var (evite)

É o jeito antigo de criar variáveis.

📌 Exemplo:

```js
var cidade = "SP";
```

**_❌ Problema do var:_**

- ele “vaza” escopo (pode causar bugs)
- tem comportamentos confusos
- hoje quase não se usa em projetos modernos

**_✅ Quando usar:_**

- só se você estiver mexendo em código antigo

## Regra simples pra nunca errar (bem prática)

- ✅ Use const sempre que puder
- ✅ Use let quando precisar mudar o valor
- ❌ Evite var
