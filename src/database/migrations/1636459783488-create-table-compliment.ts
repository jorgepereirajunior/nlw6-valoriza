import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableCompliment1636459783488 implements MigrationInterface {
    name = 'createTableCompliment1636459783488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`compliment\` CHANGE \`user_sender\` \`user_sender\` char(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`compliment\` CHANGE \`user_receiver\` \`user_receiver\` char(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`compliment\` CHANGE \`tag_id\` \`tag_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`compliment\` ADD CONSTRAINT \`FK_04a8b5f89ce7fd6cc4fa0946e10\` FOREIGN KEY (\`user_sender\`) REFERENCES \`user\`(\`id\`) ON DELETE SET NULL ON UPDATE SET NULL`);
        await queryRunner.query(`ALTER TABLE \`compliment\` ADD CONSTRAINT \`FK_722eed54cdd2326ff6e6c5c2e8c\` FOREIGN KEY (\`user_receiver\`) REFERENCES \`user\`(\`id\`) ON DELETE SET NULL ON UPDATE SET NULL`);
        await queryRunner.query(`ALTER TABLE \`compliment\` ADD CONSTRAINT \`FK_606a6a0e418f246baf2921dc07e\` FOREIGN KEY (\`tag_id\`) REFERENCES \`tag\`(\`id\`) ON DELETE SET NULL ON UPDATE SET NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`compliment\` DROP FOREIGN KEY \`FK_606a6a0e418f246baf2921dc07e\``);
        await queryRunner.query(`ALTER TABLE \`compliment\` DROP FOREIGN KEY \`FK_722eed54cdd2326ff6e6c5c2e8c\``);
        await queryRunner.query(`ALTER TABLE \`compliment\` DROP FOREIGN KEY \`FK_04a8b5f89ce7fd6cc4fa0946e10\``);
        await queryRunner.query(`ALTER TABLE \`compliment\` CHANGE \`tag_id\` \`tag_id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`compliment\` CHANGE \`user_receiver\` \`user_receiver\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`compliment\` CHANGE \`user_sender\` \`user_sender\` char(36) NOT NULL`);
    }

}
