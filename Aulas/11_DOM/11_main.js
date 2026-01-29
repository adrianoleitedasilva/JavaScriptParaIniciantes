// app.js
// Manipula o DOM do formulário "Add User" e da lista (adiciona, remove, edita, valida e evita duplicados por e-mail).

(() => {
  // Helpers
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Pega elementos do DOM (assume o HTML que você gerou)
  const form = $(".form");
  const nameInput = $('.field input[type="text"]');
  const emailInput = $('.field input[type="email"]');
  const list = $(".list");

  if (!form || !nameInput || !emailInput || !list) {
    console.warn(
      "Não encontrei os elementos esperados (.form, inputs, .list). Confira o HTML.",
    );
    return;
  }

  // Cria um feedback visual simples (mensagens)
  const msg = document.createElement("p");
  msg.className = "msg";
  msg.style.margin = "10px 0 0";
  msg.style.fontSize = "11px";
  msg.style.color = "#333";
  form.appendChild(msg);

  const setMsg = (text, type = "info") => {
    msg.textContent = text || "";
    const colors = { info: "#333", ok: "#0a7a2f", err: "#b00020" };
    msg.style.color = colors[type] || colors.info;
  };

  // Estado simples
  let editTarget = null; // se estiver editando, guarda o elemento .list-item
  const emails = () =>
    new Set($$(".list-item", list).map((el) => el.dataset.email));

  const normalizeEmail = (v) => (v || "").trim().toLowerCase();

  // Render: cria um item de lista com botões
  function createListItem(name, email) {
    const row = document.createElement("div");
    row.className = "list-item";
    row.dataset.email = normalizeEmail(email);
    row.style.justifyContent = "space-between";
    row.style.gap = "10px";

    const left = document.createElement("div");
    left.className = "li-left";
    left.style.display = "flex";
    left.style.alignItems = "center";
    left.style.gap = "8px";

    const text = document.createElement("span");
    text.className = "li-text";
    text.textContent = `${name} — ${email}`;

    left.appendChild(text);

    const actions = document.createElement("div");
    actions.className = "li-actions";
    actions.style.display = "flex";
    actions.style.gap = "6px";

    const btnEdit = document.createElement("button");
    btnEdit.type = "button";
    btnEdit.textContent = "Editar";
    btnEdit.className = "li-btn";
    btnEdit.dataset.action = "edit";

    const btnRemove = document.createElement("button");
    btnRemove.type = "button";
    btnRemove.textContent = "Remover";
    btnRemove.className = "li-btn";
    btnRemove.dataset.action = "remove";

    // estilos inline pra não depender de CSS extra
    [btnEdit, btnRemove].forEach((b) => {
      b.style.height = "20px";
      b.style.fontSize = "10px";
      b.style.border = "1px solid #111";
      b.style.borderRadius = "3px";
      b.style.background = "#f2f2f2";
      b.style.cursor = "pointer";
      b.style.padding = "0 6px";
    });

    actions.append(btnEdit, btnRemove);
    row.append(left, actions);

    return row;
  }

  function resetForm() {
    form.reset();
    editTarget = null;
    form.querySelector(".btn").textContent = "Submit";
    setMsg("");
    nameInput.focus();
  }

  function validate(name, email) {
    const n = (name || "").trim();
    const e = normalizeEmail(email);

    if (!n) return { ok: false, message: "Informe o nome.", type: "err" };
    if (!e) return { ok: false, message: "Informe o e-mail.", type: "err" };

    // validação simples de e-mail
    const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailLike.test(e))
      return { ok: false, message: "E-mail inválido.", type: "err" };

    return { ok: true, name: n, email: e };
  }

  // Submit: adiciona ou salva edição
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const result = validate(nameInput.value, emailInput.value);
    if (!result.ok) return setMsg(result.message, result.type);

    const { name, email } = result;

    // evita duplicado por e-mail
    const used = emails();

    if (editTarget) {
      const oldEmail = editTarget.dataset.email;

      // se mudou email e já existe outro com o mesmo, bloqueia
      if (email !== oldEmail && used.has(email)) {
        return setMsg("Já existe um usuário com esse e-mail.", "err");
      }

      editTarget.dataset.email = email;
      $(".li-text", editTarget).textContent = `${name} — ${email}`;
      setMsg("Usuário atualizado!", "ok");
      resetForm();
      return;
    }

    if (used.has(email)) {
      return setMsg("Já existe um usuário com esse e-mail.", "err");
    }

    const item = createListItem(name, email);

    // insere no topo da lista (logo acima do Item 1, etc.)
    list.insertBefore(item, list.firstElementChild);

    setMsg("Usuário adicionado!", "ok");
    resetForm();
  });

  // Delegação de eventos na lista (remover/editar)
  list.addEventListener("click", (ev) => {
    const btn = ev.target.closest("button");
    if (!btn) return;

    const item = ev.target.closest(".list-item");
    if (!item) return;

    const action = btn.dataset.action;

    if (action === "remove") {
      const ok = confirm("Remover este item?");
      if (!ok) return;

      // Se estiver editando esse item, reseta
      if (editTarget === item) resetForm();

      item.remove();
      setMsg("Item removido.", "ok");
      return;
    }

    if (action === "edit") {
      editTarget = item;

      // preenche inputs com os dados do item
      const text = $(".li-text", item).textContent || "";
      // formato: "Nome — email"
      const parts = text.split("—").map((p) => p.trim());
      nameInput.value = parts[0] || "";
      emailInput.value = parts[1] || item.dataset.email || "";

      form.querySelector(".btn").textContent = "Salvar";
      setMsg("Editando... altere e clique em Salvar.", "info");
      nameInput.focus();
      return;
    }
  });

  // Atalho: ESC cancela edição
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && editTarget) {
      resetForm();
      setMsg("Edição cancelada.", "info");
    }
  });

  // Exemplo de manipulação extra: highlight ao passar o mouse
  list.addEventListener("mouseover", (ev) => {
    const item = ev.target.closest(".list-item");
    if (!item) return;
    item.style.filter = "brightness(0.97)";
  });
  list.addEventListener("mouseout", (ev) => {
    const item = ev.target.closest(".list-item");
    if (!item) return;
    item.style.filter = "";
  });
})();
