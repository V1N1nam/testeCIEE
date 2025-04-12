import Fastify from "fastify";
import cors from "@fastify/cors";
import { sql } from "./db.js";

const fastify = Fastify({ logger: true });

// Registra o plugin de CORS antes de iniciar o servidor
await fastify.register(cors);

// Rota raiz
fastify.get("/", async () => {
  return { mensagem: "Servidor Fastify rodando!" };
});

// Rota para buscar animais do banco Neon
fastify.get("/api/animais", async () => {
  try {
    const result = await sql`SELECT * FROM animais ORDER BY id`;
    return result; // o Neon já retorna um array
  } catch (err) {
    console.error("Erro ao buscar animais:", err);
    return { erro: "Erro ao buscar animais" };
  }
});

// Inicializa o servidor
fastify.listen({ port: 5555 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("🚀 Fastify rodando em: http://localhost:5555");
});
