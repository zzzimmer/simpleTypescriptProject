import { AppDataSource } from "../../database/data-source";

// Tenta iniciar a conexão
AppDataSource.initialize()
    .then(async () => {
        console.log("🔥 Sucesso! Conexão com o banco de dados estabelecida.");
        console.log("As tabelas devem ter sido criadas automaticamente.");
    })
    .catch((error) => {
        console.error("❌ Erro ao conectar no banco:", error);
    });