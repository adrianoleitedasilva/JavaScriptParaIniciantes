const toDos = [
  {
    id: 1,
    description: "Estudar JavaScript",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Enviar todos os estudos para o Github",
    isCompleted: false,
  },
  {
    id: 3,
    description: "Estudar Versionamento de Código",
    isCompleted: true,
  },
];

// Convertendo para JSON
// Usamos quando precisamos enviar para um servidor, ou outra aplicação
const toDosJSON = JSON.stringify(toDos);
console.log(toDosJSON);

// Convertendo para uma Lista de volta
// Usamos quando recebemos algo, por exemplo de uma API, para podermos acessar e usar os dados
const toDoList = JSON.parse(toDosJSON);
console.log(toDoList);
