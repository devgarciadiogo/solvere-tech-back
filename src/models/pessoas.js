const db = require("../config/database");

const Pessoas = {
  getAll: async () => {
    const res = await db.query("SELECT * FROM pessoas");
    return res.rows;
  },

  getById: async (id) => {
    const res = await db.query("SELECT * FROM pessoas WHERE id = $1", [id]);
    return res.rows[0];
  },

  create: async (pessoa) => {
    const { nome, telefone, email, senha } = pessoa; // Ajuste conforme os campos
    const res = await db.query(
      "INSERT INTO pessoas (nome, telefone, email, senha) VALUES ($1, $2, $3, $4) RETURNING *",
      [nome, telefone, email, senha]
    );
    return res.rows[0];
  },

  update: async (id, pessoa) => {
    const { nome, telefone, email, senha } = pessoa; // Ajuste conforme os campos
    const res = await db.query(
      "UPDATE pessoas SET nome = $1, telefone = $2, email = $3, senha = $4 WHERE id = $5 RETURNING *",
      [nome, telefone, email, senha, id]
    );
    if (res.rowCount === 0) {
      throw new Error("Pessoa não encontrada");
    }
    return res.rows[0];
  },

  delete: async (id) => {
    await db.query("DELETE FROM pessoas WHERE id = $1", [id]);
  },
};

module.exports = Pessoas;
