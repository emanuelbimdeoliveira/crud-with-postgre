const titleValidation = (title) => {
  if (!title || title.trim() === "") {
    throw new Error("O título é obrigatório");
  }

  if (title.length > 100) {
    throw new Error("Título muito grande");
  }
};

const idValidation = (id) => {
  if (isNaN(id)) {
    throw new Error("ID inválido");
  }
};

export { titleValidation, idValidation };
