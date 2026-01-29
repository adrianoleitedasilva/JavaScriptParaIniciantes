# O que são funções?

Funções são blocos de código que executam uma tarefa específica e podem ser reutilizados.

👉 Pense como uma receita: você chama a função sempre que precisar.

## Função tradicional

```javascript
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3)); // 5
```

### 📌 A função:

- recebe dados (parâmetros)
- executa uma lógica
- devolve um resultado (return)

**_Por que usar funções?_**

- evita repetir código
- deixa o código organizado
- facilita manutenção

### Arrow Function (função de seta)

É uma forma mais curta e moderna de escrever funções.

```javascript
const somar = (a, b) => {
  return a + b;
};
```

### Arrow Function simplificada

Quando tem uma linha, dá pra simplificar:

```javascript
const somar = (a, b) => a + b;
```

Exemplo prático

```javascript
const dobrar = (numero) => numero * 2;

console.log(dobrar(5)); // 10
```

### Função sem parâmetros

```javascript
const saudacao = () => {
  console.log("Olá!");
};

saudacao();
```

### Função com apenas um parâmetro

```javascript
const quadrado = (n) => n * n;
```

## Diferença principal (bem simples)

| Função tradicional | Arrow Function |
| ------------------ | -------------- |
| Mais antiga        | Mais moderna   |
| Sintaxe maior      | Sintaxe curta  |
| Usa `function`     | Usa `=>`       |

📌 Para iniciantes:

- ✅ Use arrow function na maioria dos casos
- ✅ Função tradicional aparece mais em códigos antigos

**✅ Funções são blocos reutilizáveis de código, e arrow functions são uma forma mais curta e moderna de escrevê-las.**
