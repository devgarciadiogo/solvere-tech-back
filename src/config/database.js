// src/config/database.js

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", // Substitua pelo seu usuário do PostgreSQL
  host: "localhost", // O host onde o PostgreSQL está rodando
  database: "Solvere_Tech", // Substitua pelo nome do seu banco de dados
  password: "1234", // Substitua pela sua senha do PostgreSQL
  port: 5432, // A porta padrão do PostgreSQL
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
