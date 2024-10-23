const express = require("express");
const router = express.Router();
const Pessoa = require("../models/pessoas");

// Obter todas as pessoas
router.get("/", async (req, res) => {
  try {
    const pessoas = await Pessoa.getAll();
    res.json(pessoas);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao obter pessoas");
  }
});

// Obter uma pessoa pelo ID
router.get("/:id", async (req, res) => {
  try {
    const pessoa = await Pessoa.getById(req.params.id);
    if (pessoa) {
      res.json(pessoa);
    } else {
      res.status(404).send("Pessoa não encontrada");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao obter pessoa");
  }
});

// Criar uma nova pessoa
router.post("/", async (req, res) => {
  try {
    const novaPessoa = await Pessoa.create(req.body);
    res.status(201).json(novaPessoa);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao criar pessoa");
  }
});

// Atualizar uma pessoa
router.put("/:id", async (req, res) => {
  try {
    const pessoaAtualizada = await Pessoa.update(req.params.id, req.body);
    if (pessoaAtualizada) {
      res.json(pessoaAtualizada);
    } else {
      res.status(404).send("Pessoa não encontrada");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao atualizar pessoa");
  }
});

// Deletar uma pessoa
router.delete("/:id", async (req, res) => {
  try {
    await Pessoa.delete(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao deletar pessoa");
  }
});

module.exports = router;
