// CAPTURA DOS ELEMENTOS
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const feedback = document.getElementById("feedback");

// FUNÇÃO DE VALIDAÇÃO
function validarFormulario(nome, email) {
  if (nome.trim() === "") {
    return "O nome é obrigatório.";
  }

  if (email.trim() === "") {
    return "O email é obrigatório.";
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    return "Formato de email inválido.";
  }

  return null;
}

// EVENTO DE SUBMIT
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = nameInput.value;
  const email = emailInput.value;

  const erro = validarFormulario(nome, email);

  if (erro) {
    feedback.textContent = erro;
    feedback.className = "error";
    return;
  }

  feedback.textContent = "Formulário enviado com sucesso!";
  feedback.className = "success";

  form.reset();
});
