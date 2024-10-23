const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pessoasRoutes = require("./routes/pessoas");

const app = express();
const PORT = 3000;

// Middleware para habilitar CORS com configurações
app.use(
  cors({
    origin: "http://localhost:8081", // Permite seu frontend acessar o backend
    methods: "GET,POST,PUT,DELETE", // Métodos permitidos
    allowedHeaders: "Content-Type,Authorization", // Headers permitidos
  })
);

// Middleware para body parser
app.use(bodyParser.json());

// Rotas
app.use("/api/pessoas", pessoasRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
