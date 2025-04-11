import { sql } from "./db.js";

function tabelaAnimais() {
  sql`
  CREATE TABLE animais (
    id TEXT PRIMARY KEY,
    nome TEXT,
    descricao TEXT,
    data_nascismento DATE,
    especie TEXT,
    pais_origem TEXT
  );`.then(() => {
    console.log("Tabela Criada");
  });
}

function tabelaCuidados() {
  sql`
  CREATE TABLE cuidados (
  nome_cuidado TEXT,
  descricao TEXT,
  frequencia TEXT
  )`.then(() => {
    console.log("Tabela Criada");
  });
}

tabelaCuidados();
