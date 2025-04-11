import { sql } from "./db.js";

function tabelaAnimais() {
  sql`
    CREATE TABLE (
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

tabelaAnimais();
