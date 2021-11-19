import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1637322321910 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"Users",
                    columns:[
                        {
                            name:"id",
                            type:"uuid",
                            isPrimary:true
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
