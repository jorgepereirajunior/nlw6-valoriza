import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableTag1636372264119 implements MigrationInterface {
    name = 'createTableTag1636372264119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tag\` (\`id\` varchar(64) NOT NULL, \`name\` varchar(40) NOT NULL, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAd\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tag\``);
    }

}
