import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateTarefas1792677641060 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
