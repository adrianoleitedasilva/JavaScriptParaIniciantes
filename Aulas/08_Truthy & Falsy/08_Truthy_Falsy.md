## O que é Truthy e Falsy?

No JavaScript, nem tudo é só true ou false.

👉 Alguns valores são considerados verdadeiros (truthy)
👉 Outros são considerados falsos (falsy)
quando usados em condicionais (if).

## Valores Falsy (os “falsos”)

Esses valores sempre viram false em uma condição:

```javascript
false
0
-0
""        // string vazia
null
undefined
NaN
```

Exemplo:

```javascript
if (0) {
  console.log("Entrou aqui");
} else {
  console.log("Não entrou");
}
// Não entrou
```

## Valores Truthy (os “verdadeiros”)

👉 Todo valor que NÃO é falsy é truthy

Exemplos:

```javascript
true
1
-10
"texto"
" "
[]
{}
function() {}
```

Exemplo:

```javascript
if ("oi") {
  console.log("Isso é truthy");
}
```

Exemplo prático (muito comum)

```javascript
const nome = "Adriano";

if (nome) {
  console.log("Nome preenchido");
} else {
  console.log("Nome vazio");
}
```

**👉 Se nome estiver vazio (""), cai no else.**

Exemplo com array

```javascript
const lista = [];

if (lista) {
  console.log("Array existe");
}
```

**⚠️ Atenção:**

- Array vazio [] é truthy
- Objeto vazio {} é truthy
  
**✅ Truthy e Falsy definem se um valor é tratado como verdadeiro ou falso dentro de uma condição.**