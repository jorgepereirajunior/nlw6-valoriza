import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableUser1636211588759 implements MigrationInterface {
    name = 'createTableUser1636211588759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(50) NOT NULL, \`name\` varchar(60) NOT NULL, \`email\` varchar(80) NOT NULL, \`password\` varchar(24) NOT NULL, \`admin\` tinyint NOT NULL DEFAULT 0, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
