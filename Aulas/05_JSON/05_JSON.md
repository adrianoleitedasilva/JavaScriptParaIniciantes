# O que é JSON?

JSON significa JavaScript Object Notation.

É um formato de dados usado para trocar informações entre sistemas, APIs e aplicações.

👉 Pense no JSON como uma forma padrão de enviar dados pela internet.

## JSON é JavaScript?

**_Não._**

Apesar do nome, JSON não é uma linguagem de programação.

Ele apenas organiza dados, usando uma estrutura parecida com objetos do JavaScript.

### Exemplo de JSON

```json
{
  "nome": "Adriano",
  "idade": 30,
  "ativo": true
}
```

## Diferença entre Objeto JS e JSON

Objeto em JavaScript:

```javascript
const pessoa = {
  nome: "Adriano",
  idade: 30,
};
```

JSON:

```javascript
{
  "nome": "Adriano",
  "idade": 30
}
```

📌 Diferença importante:

- No JSON, as chaves sempre têm aspas
- JSON não aceita funções
- JSON não aceita comentários

## Onde o JSON é usado?

- APIs
- Back-end ↔ Front-end
- Configurações
- Salvar dados

Exemplo do mundo real:
Quando um site busca dados de um servidor, ele geralmente recebe um JSON.

## Converter entre JS e JSON

### Objeto → JSON

```javascript
]JSON.stringify(pessoa);
```

### JSON → Objeto

```javascript
JSON.parse(json);
```
