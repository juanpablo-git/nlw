import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class AlterUserAddPassword1637664826647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "Users",
            new TableColumn(
                {
                    name:"password",
                    type:"varchar",
                    isNullable:true
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("Users","password")
    }

}
