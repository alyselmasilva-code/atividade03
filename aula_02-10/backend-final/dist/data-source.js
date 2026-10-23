"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.dataSourceOptions = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const tarefa_entity_1 = require("./tarefas/entities/tarefa.entity");
exports.dataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [tarefa_entity_1.Tarefa],
    synchronize: false,
};
exports.AppDataSource = new typeorm_1.DataSource({
    ...exports.dataSourceOptions,
    migrations: ['src/migrations/*.ts'],
});
//# sourceMappingURL=data-source.js.map