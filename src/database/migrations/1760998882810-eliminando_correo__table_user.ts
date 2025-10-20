import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminandoCorreo_tableUser1760998882810 implements MigrationInterface {
    name = 'EliminandoCorreo_tableUser1760998882810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying NOT NULL`);
    }

}
