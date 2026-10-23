import { AppDataSource } from './data-source';
import { Tarefa } from './tarefas/entities/tarefa.entity';

async function seed() {
  await AppDataSource.initialize();
  const repo = AppDataSource.getRepository(Tarefa);

  await repo.clear();
  await repo.save([
    { titulo: 'Estudar ORM', descricao: 'TypeORM + PostgreSQL', concluida: false },
    { titulo: 'Preparar a aula de hoje', concluida: true },
  ]);

  console.log('Seed concluído!');
  await AppDataSource.destroy();
}

seed().catch((error) => {
  console.error('Erro ao executar o seed:', error);
  process.exit(1);
});