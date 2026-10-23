"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const tarefa_entity_1 = require("./tarefas/entities/tarefa.entity");
async function seed() {
    await data_source_1.AppDataSource.initialize();
    const repo = data_source_1.AppDataSource.getRepository(tarefa_entity_1.Tarefa);
    await repo.clear();
    await repo.save([
        { titulo: 'Estudar ORM', descricao: 'TypeORM + PostgreSQL', concluida: false },
        { titulo: 'Preparar a aula de hoje', concluida: true },
    ]);
    console.log('Seed concluído!');
    await data_source_1.AppDataSource.destroy();
}
seed().catch((error) => {
    console.error('Erro ao executar o seed:', error);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map