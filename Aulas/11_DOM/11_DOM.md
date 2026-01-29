# O que é DOM?

DOM significa Document Object Model.

É a forma como o navegador representa a página HTML para que o JavaScript consiga acessar e modificar o conteúdo da página.

👉 Pense assim:
o DOM é o “mapa” da página.

## O que é manipular o DOM?

Manipular o DOM é usar JavaScript para:

- ler elementos da página
- mudar textos
- mudar cores
- esconder ou mostrar coisas
- reagir a cliques

📌 Em resumo: é fazer a página mudar sem recarregar.

### Exemplo simples

**HTML:**

```html
<p id="mensagem">Olá</p>
```

**JavaScript:**

```javascript
const p = document.getElementById("mensagem");
p.textContent = "Olá, mundo!";
```

👉 O texto da página muda na hora.

## Como selecionar elementos do DOM

**Selecionar por ID**

```javascript
document.getElementById("titulo");
```

**Selecionar por classe**

```javascript
document.querySelector(".botao");
```

**Selecionar vários elementos**

```javascript
document.querySelectorAll(".item");
```

**Modificando elementos**

```javascript
elemento.textContent = "Novo texto";
```

**Mudar HTML**

```javascript
elemento.innerHTML = "<strong>Texto</strong>";
```

**Mudar estilo**

```javascript
elemento.style.color = "red";
```

**Criar elementos na página**

```javascript
const li = document.createElement("li");
li.textContent = "Novo item";

document.body.appendChild(li);
```

**Exemplo do mundo real**

```javascript
const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  alert("Botão clicado!");
});
```

**_👉 Clique → JavaScript reage → página muda._**

**✅ Manipular o DOM é usar JavaScript para acessar e alterar elementos do HTML em tempo real.**
