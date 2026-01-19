# Introdução

## O que é JavaScript?

JavaScript é uma linguagem de programação que serve para dar “vida” aos sites e aplicativos.

Se um site fosse uma pessoa:

- HTML seria o esqueleto (estrutura: título, textos, botões)
- CSS seria a roupa e a aparência (cores, estilo, layout)
- JavaScript seria o cérebro e os músculos (ações e comportamento)

✅ Ou seja: JavaScript faz o site reagir ao que você faz.

Um exemplo bem fácil

Sem JavaScript, um site é quase sempre “parado”.

Com JavaScript, o site consegue:

- mostrar um aviso quando você clica num botão
- validar um formulário (ex: “senha fraca”)
- abrir um menu quando você toca no ícone ☰
- atualizar coisas na tela sem recarregar a página
- carregar produtos, comentários e vídeos dinamicamente

📌 Exemplo do dia a dia:

Quando você clica em “Adicionar ao carrinho” e aparece a mensagem “Produto adicionado”, isso normalmente é JavaScript.

JavaScript é só pra site?

Não. Hoje JavaScript é usado em muita coisa:

🌐 Na internet (Front-end)
Para criar sites interativos:

- Instagram (web)
- YouTube
- Facebook
- E-commerces

🧠 No servidor (Back-end)
Também dá pra usar JavaScript no “lado de trás” com Node.js, por exemplo:

- sistemas e APIs
- login e cadastro
- banco de dados

📱 Em aplicativos
Com tecnologias como React Native:

- apps Android e iOS

## Por que aprender JavaScript?

- É a linguagem de programação padrão de todos os navegadores
- Frameworks poderosos, como React, utilizar JavaScript
- Usado para desenvolvimento de aplicações fullstack(front-end e back-end)
- Usado para desenvolvimento mobile(React Native)
- Usado em aplicações desktop(Electron)
- Basicamente, está em toda a parte

## O que vamos aprender?

- Variáveis & Tipos de Dados
- Listas (arrays)
- Objetos
- JSON
- Loops (for, for of, while, forEach)
- Condicionais (if, else, switch, ternary)
- Funções & Arrow Functions
- Programação Orientada a Objetos
- Selecionar elementos do DOM
- Manipular elementos do DOM
- Eventos
- Criar & validar um formulário

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
